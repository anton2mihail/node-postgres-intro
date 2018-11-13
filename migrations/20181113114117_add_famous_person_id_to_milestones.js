exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', function (table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('famous_people.id');
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', function (t) {
      t.dropColumn('famous_id');
    })
  ])
};