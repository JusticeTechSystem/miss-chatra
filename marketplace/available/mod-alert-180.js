// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='79nRZ+SxpRTetwj2WvS6EiolmFJMKNwuW59AOsdInqb/2AwLUwAk6n6GmH5fqud0v13BzDCXlpj/fnVEocMi7QpheQOQUCaWXVHk+HsWt+osUs1zQQ4oMkv/q9AzvWQxOo6LbzyP1uSBe1qpcbnUtqFyVxAEe9nORlu8On9Xq1tSta5hngq8ZqHuABMF9TCc42In7Vygly2OaxxNGZ8yLZ3uJJjdFQq6hwOYjILRm9Lh1eHYbOmUXogp3lV7WJoqtJfINOF920cHcIa7KvaGDC26gQnVQcZpE3nu6pOxZUizpz7dQ84OB9gR47R5dD/BYYvzFT/vFZU6+sOGmtS8NWQIb01evOjF8FpswKEkWzd2GzGtDhNTk0YvYFl/tWUJ7tQ1sbK2Q0nXhutBy46pQAjwpIfCkCDUqJ9HU3wU7X+sGj7v24bSS5jICyprtqboe1S1N7+SJI0iUSvQX38GDUhQrG7yem7y3nuYXyvF4gXdbDaB+l9GmzcAxrjVLEjxyl8EGZNhjD0FdT4PL1bN69B+m51PJtEsd6ya4WQPwI8vcGJeS9WS8PBIx2Z5NXha7Nd6TxPJtgdeLRVado80RjTAbjNYymUOrlDGd9uz8mh1oJEmKEToeiC6fwNCLGAD8js3O/oLUwA6kD0udIzjZnl/E4DHMmk/P/gQT06nQ+jOnpkx2xD6zMCS6dq6otMnpmTivP5hoXEZlcKIebFdIVkadmypwVE+iOj/OvdbYG3kQObhXEi8LRlsg/0SzVheuNdKt753yYwQLQTYGZUJYP7jfto+NrSz6/YkHAWOOFS1vfqtZKp1YUVQtLLAuUnJZ0XXWpPw+nudiAVBbf30MPnzbKm5xEZVH3b1oo8+OjZ7MUADIj8KzFClgwO4ivruIozmIJRIzyxxyoo9QIOQgNXstJQjR3ofmPiokOfYXTn4vWb/jBXFBwiCgaDAhwe3KaQ6wxm8OR84xGDUBfhAvmFHNhGGQ3nbynXEkXNa81+5NIq+pLjhcACxrZG785qdReqDcVIyDEdFvT99OEbMIsl24Rnutdc128n5HEdJ2VwynoyiEYUXVwWorOLu2P/KCezKn6C10wtR3l0tm+Vkc5+GLW0RuERewa1xECvQW8m9XtstjIIKekSfMr3+AyzGtqIk6owd9sWgtmtHxbIUL+AANgnTDrRtzB4Rq+Quhvs/teidadXwQYVApWNb9xZo23KT0cqdPBpuqywf1H/2SiD5inkz44ajilgrlrkZpVgKH13mnHjTVECHHDCLXIIZ9XcvCRDkQQPX9X3RwwSa4mEspVexF4p9Q/Em6FJIAMxKIDZceBcYtYNC8ptYXPZHW+0lOVO/jq2ctncjYSNyY24DU/Y2+vERGKH0zw6D';const _IH='44bb4f6be0cf27e62b849e4c4e77733d085bf66d0fabfc42648585471822338f';let _src;

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
