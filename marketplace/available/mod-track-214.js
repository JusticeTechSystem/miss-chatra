// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VlVdR+sisK9qfmihLuivU7298jIlogQjNqAPrFeUfyQwcYnq4hTAxkaOxlZedo2YMIFZsz/Th0uodgD/YZYpIqiUvT02xax6Xot7sZMcJmZN0Yd8QsnToxGx4M8tTdGDHHfP0sRWRM49t9bmIuXp2PreoSLgz8Htd0/xt6P21Tp1WOjuofjsstCNSbOynvVTr843i1JQWWGsd/BhxpEALb2sDSuAan7VBhDx6SbxHpcsjIc9+JhblTQi5YFKAl7ZI5duNUEL8dmGFp1DT9DCtj/8N71Swnt/TsKNNgeuJzIKs1VlNqZA4ZuH0cmNWMLiRv+zB33JhLsgNIKXHmbwc01JKN6wJmKoaCBrxlB98AJndhnYjb9Zyy4W2IeR/EaFD9Dj55BhgHG6qdlJai6gYvYeVrp3WdCoz/1BT1bOhZpk5LTqywYlTU4iLq7SI/ROkMidTFDUHRxzSqr0NHraASDgOuE373rrUe2Ni+Rf6nVtCveh+IR0w+MqpChyjvT92p7e3WRl2tvvyfgBR8HSPbYjJK/D7wAPjxDHGM+CbQhuKozU8Ly0HlyDXnwKmGAyvLRcZYJliMvg+dl0CcwRvtxY/2c9styKSlUnzU1A371M/dFXLAYlpO5ar2GrJ0XFxoMBs5e9FQ58W4Ix3nDQv9JeDK+m1n/58sPUgmBl5FzC8Ar+WwAM0PS99o+SGniyLr/IIzDs66SxfZtJFjLGma8RBFJmG2AJK5vyfABuJOIjlD0uybN+I+hp11bAiEIUry8I1h3fjP+ARDAP1LWazIAXnQF1uQqgp02I+ly9ng7n6hl7eEA/G1tzDDSu0n+6LPOoIL6pLirNlShUnX24BM/CR01W1PVU0FLfdHURCE/bGWYbkBjXmpXYppGzPdGWkOlh/ZdP0WTJfke+/8zGkFBNbIZ+o3N6BGiuKYC85l74MeYKikDLnNwG6/gw2APrROG73JTitllye+hbXkw4oc5Q1FJkCHk5U+qJiUcRft7M+PdD2S4JvGzKQ8YdCYYGV6jKRWtTivXg9sHdsfIaEhc/dcaoKx0wA54P8qgqH/qtAGtV2kQCJ+aMkO04AGdRE5/dBvCbF/jD7BheL62fI2mdg9ph/jVZAAJm2zERYuaP+hl655dmuZeE+5AaxPchhogvZnpM7TqmLDnhfb8CFz2IfrxG0Few3wg3H0X2icfel3Sh7y+TkDKg8VXjK2lByma2HAfy42NG0n2gUlOSOT4YMJ1FkpuWMYqaqzLkxAhQJ3IsbY7ohiqEpbAU/16xp8dsvRyNP0hj3Ilpa0asWsSycf1CxnLtqLsVTViWQny4rJAzCejAbR/wNquwzIX0wKJO8vrR4rl8iuwSEZRCE/T7Xkra4BQbQTA9RXaL';const _IH='b8fb4fc5eb8cc2ff98825c1fe1feda5ec82eb79043d4db1d8577c672899a8594';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
