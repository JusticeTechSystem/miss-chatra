// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcvm6/qPndFWWQnVdU00VKFjLKN91LTCAgCj/s7hEJnKnX8htfzqnVJCwEnUrXkl6mmxR3LbqeXJOxuverhVl9U0A3szWrIg1c0Xpc5R1oWnaVwU7IHpGcb7L7Ui0wI1RjbfNwwyHg/NEnhPT+pXKl19Be9t40Nabu4UlTvoLhqHqF/BOnw4gjV9EdGCHw3NbhSZeSCLMQqgamwRs3H8dyFntwAYq4kpjfSHDZGSkBjwrlnLgAr81iHYKKblqK/icpMARVrwbLfuzHFyXTVKBV3UrESIPdgwn2U7DWGNNrdKFPopsYk7Xx5NwpgPyFg9RpRWJDpUr3qs1IW07ZmrS6sDYESVPfqZZfbLRQ+ClxFrMmZz2dlQX0vA+RUQ4IpTlooWYzamfYUYAeJqm6uf0W2BmJjz5L8LIV7448cP/Hqo1FOmdqj3RKzMck0BXLf0q4H07Ej1S6ugS2kVGE7HYV9CTBi1oIzgGK2Ff5OJgTb71fHVWwLqyNGteIxCWobsiORmL5nkpDylrJpzq0af959bnUxCDevYGOXu4xADXrk06EikfpDFlIjLw3PWtcYlfnE1mpDtc6fBbyJmPfnWWhPg9zIayICBCK0Z+f2DviEtoXQ49Sb+6XUs4SnFGqLCg24zL6yGHpyYnMYT+MD7H+aGURsgknWCAWW1oADdKSCBdjlE1xPGdKgPYhTzFSxcOk//P0j3jkl8kbrB87L2YRlQWKwny11gs8tXrKHm5l9TNpCBQPqNmeZsUOgbYtpcyISesarrYL7fp4ZBgbR1QySVQmCpX8nCqv003V96Lmocsz+4cL3tUAewsgnpKyG3+FBbBK9jc+SUeNEldSIVyMz/LP/+ouSs8zGFt2M2uUePI0XKPUnlfjpkW4noXRz6kY6PMTc3Gr87vkRWI/FBaGiqMwzj/7dnD3HLkEvYHl7I1KP52YYWewmAq83XSDBJrB/qlyaLb9gwraprguWdJ6zgMT/RLNtn/pAaz26ut2ew1qLvNJX6RkUaVsvgXaViP9k+XQS84RLM72LY+YN+9137bq5WaB2FtP9YAIZMgOgGR8353h3R2hEcHaQSB7WIRDEwHjVgGhN3UAgs8lz9VWMkAq7hodhWydsfgpnbhJ3qxa12jxXbQroRa9/bdUjtYTRxhSzdDTvkoGu7HFehUaHV6VhbI5j03Kb8+MLp2HIrUGQ0MyfU4p7fvBZUvRqQl5QpzGXPtA';const _IH='7d760d92d917140596a352dde1dbc97460ed01e920300d43c123a08e499ff443';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
