
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('diary').del();
  await knex('baby').del();

  await knex('baby').insert([
    {first_name: 'taiki', last_name: 'kanzaki', birth_day: '20201010'},
    {first_name: 'kenji', last_name: 'kanzaki', birth_day: '20201110'},
    {first_name: 'yuuta', last_name: 'kanzaki', birth_day: '20201210'}
  ]);

  await knex('diary').insert([
    {baby_id: 1, date: '20211110', branch: 1, title: 'test', comment: 'hahah', author: 'papa'},
    {baby_id: 1, date: '20211110', branch: 1, title: 'test2', comment: 'gagagaga', author: 'mama'}
  ]);

};
