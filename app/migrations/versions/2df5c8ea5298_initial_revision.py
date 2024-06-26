"""Initial revision

Revision ID: 2df5c8ea5298
Revises:
Create Date:

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '2df5c8ea5298'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
            sa.Column('name', sa.String(), nullable=False),
            sa.Column('calories', sa.Integer(), nullable=False),
            sa.Column('carbs', sa.Float(), nullable=True),
            sa.Column('protein', sa.Float(), nullable=True),
            sa.Column('fat', sa.Float(), nullable=True),
            sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('products')
    # ### end Alembic commands ###
