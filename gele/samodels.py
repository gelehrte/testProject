import sqlalchemy as sa
import sqlalchemy.ext.declarative

Base = sqlalchemy.ext.declarative.declarative_base()


class Zoo(Base):
    __tablename__ = 'zoo'
    critter = sa.Column('critter', sa.String, primary_key=True)
    count = sa.Column('count', sa.Integer)
    damages = sa.Column('damages', sa.Float)

    def __init__(self, critter, count, damages):
        self.critter = critter
        self.count = count
        self.damages = damages

    def __repr__(self):
        return "<Zoo({},{},{})>".format(self.critter, self.count, self.damages)
