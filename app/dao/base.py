from sqlalchemy import select, insert

from app.database import async_session_maker

class BaseDAO:
    model = None

    @classmethod
    async def find_all(cls):
        async with async_session_maker() as session:
            query = select(cls.model)
            execute = await session.execute(query)
            result = execute.scalars().all()
            return result

    @classmethod
    async def find_one_or_none(cls, **filter_by):
        async with async_session_maker() as session:
            query = select(cls.model).filter_by(**filter_by)
            execute = await session.execute(query)
            result = execute.scalar_one_or_none()
            return result

    @classmethod
    async def find_by_id(cls, model_id: int):
        async with async_session_maker() as session:
            query = select(cls.model).filter_by(id=model_id)
            execute = await session.execute(query)
            result = execute.scalar_one_or_none()
            return result

    @classmethod
    async def add(cls, **data):
        async with async_session_maker() as session:
            query = insert(cls.model).values(**data).returning(cls.model)
            new_elem = await session.execute(query)
            await session.commit()
            return new_elem.scalar()

    @classmethod
    async def delete(cls, model_id: int):
        async with async_session_maker() as session:
            query = select(cls.model).filter_by(id=model_id)
            execute = await session.execute(query)
            result = execute.scalar_one_or_none()
            if result:
                await session.delete(result)
                await session.commit()
            return result

    @classmethod
    async def update(cls, model_id, **data):
        async with async_session_maker() as session:
            update_query = (
                update(cls.model)
                .where(cls.model.id == model_id)
                .values(**data)
                .returning(cls.model)
            )
            execute = await session.execute(update_query)
            result = execute.scalar_one_or_none()
            await session.commit()
            return result