// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='np8NqleY6XvykQjSdpSG0qIhNYlJfyypvWpW/zziONuyxdg6dCr5Y4LWmapRPi5iQdn8NCYzq7PMRKO/OUOqdjWJoLHqpqgRMIMLgON9i0bjbU7CMMf/GzgGjdFubAavnWQSnOXJmJN8CjUD5C3uCd6Q8CSvbswuM0u9cbZ5tsXXpClqp3nU+3Tle5omm9XE+8yBF+WvuiQCA4L/oS+26b1QAwCcrwevKIFdF97W8HJJT8BT9sPoBOgU9rVYZNKVfOVjarHBIlVEhE9A1tkw0E6wJkiQ8bFu4R40fxJvOxVXWTP2ugIEJexMqJzAKbv5mwGNZpBj1D690W1370O2nfQIzLorSWoXOkkWH+VqS7XWQpQFax5r9o0+IuCJF0MuT6xQ+f78sZVtXMRPjB8OqQXP1FXA9+JNxZY7TVYPGXhMHNkedKcrahubduC5Hatxhgq5fTqgawkLwrgv8AqVj5KumjXw8N/mf0uaRIU2WvPe+jiP89UZhCm9+BBX4f1S3Y5uVwj9GEyYHv8UiQ7VUbMCvZSw1nXer1oH6VGkewZHRwrQ+n0Noo04LK/z9zN5OlC2J3imPqOu7yb3ZApxeYF11lub94LsyAKfaSDpOYJRYIRnzTDVLKIl7NoKadlpD0w8ok3DcYa7P4L4BcuLjLQtlK2V5z4NiSgodVMsyZ6uoYIOVBkLEpYpiPFfGYst7SJ0Leers6GvSVUjGvATkMZ4nrobrvXShJhyXkJ08QMlPAv27KT6I7Mh5occf0tXqa7TXlOImdG2Lpwp+t4Vd+v1J+XGYzti/7suqA67uZqqOrkANCQUK7HxD06fwyLMZAkPwUy4DfHmP18QrKPPlNWfcVxX5X7K2s2E8tiggCeJZ3rJS7Vjlxq7zZ/dnKOKDLbZdvNCqwVGHrKTh6Mt2Yl5K7h24QEPJ+RSLXr4VcKwyX3ydLKXNYSBLudDEtFC+YFPXw7eyxXGDuCRaJwwtkaY9uAZHNKw7kb3zjtW3jr0S8JVrgf97wsrsEqsvXH9B+G//YQ9BW4rcag8k6qqEWtlXxJgT9YsMHtmmWkro85A8Dt7+IjRZbz/De8mujYlArHAkDdnTUlgKVzgDJ+sl0mC9n19cyPni1gktAVSuK18+3+7zq2SBuvBKrxH2ovbXT/3BYoaj5anFi/eT52DtZPY3PP69KEjoTd1eQodmnOMEi7ICRwsQQONrf7iKTBfj65eS5s2RycABC85WQoFPxAWsinfTpvgjzWHPB9/N6mgB44rcpaqBcfHLmjzyJCHtaMdnBQdibNKKW9X9IlVywF0jXytO3BLrHYpD7HhBsDAu0fXqGcNFCjQDsAeHmohY0EKeY8F1sRfroxRvvDJCKt6fCHSLTjlvJJxi2LhvoI33m1Y/uLDtcAhtTg8G+V/7I4iRdlsfjWhWmEqdCBxkgfdhHxDmjE91tWEOqfABCnhbTcXu237pOiZ6siTdWQBCET7jAj98abEpu+8m4wew/bkyo2FEs9oxOARcpwp7OQ3ZdhmZRXRBp3OA2TDBmvk871phSMRV8DkfSVPirwgTTUOeVu/iBbyH1Gf4K8XfBjVN0U3B/chQuSWZ9/Ii+0upCsR7izBu0Gs/sHcYkj8YHoJfZPzhvP4uYLUNOBL841mZepBa8whExcohr5L/jAOf5ZkjwFaj9UswppXYvxrRinn6siddd80H5XuELp5Jnr0sGs8CaQGDvGkFVvqpn9SquQbJfguVe0uPATYDQuS8zZ6t1gQ5lh3/a3UglC8R3mxyjOdP9GhCptf8afzADwe9vuWxQJ4RWc6vEBDJLlSYi9ji6NfvUBBFosFRxhFZlDo7tWSnZLqH6+7Coem7cknIjnbWOTgrQ==';const _IH='e73f7daf23d5ef006b68bd3f3c36c112d344b13111f685046d6391effe60a517';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
