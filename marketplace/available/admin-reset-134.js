// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='390nBI1jsNBR3PbkpWEnrF4YHocYmJgZni66uHCpitfkxNTqnCNvRNb5nD5wCU1mcCsQtYQKHRriL8qRcZIQq7ewqLrHUPELTDbYSq+g/gbifecnfDyzeP4Dr4fQIvPWB+NWeIcyv3jEAKWqbTcrUh5vL6EvUFtVD4Z91r1UEbzXoVhlgfJ6Cs1VaayrWAmPnj5zHPrIJ4AbwbthjXVIJ1q9+4C+TupGibNzKiuXIg/qiYIovOSWj6ptQfVDPG27vkvdwccrQ1+c40DCgtEeB4bq2L26EnG6LsdxGo8VczNQlHBnEUDyXDYvNSy5ICYVUWSBjKz2Rlv/jvKtLavok0Fct7XVaiOT9QIkWvnBUmVitSzpJUwfS+2YOxaPnH0Q54JUSGh3lC0Em3o4c06PrW97w/e3D5e/bN6VWE56T5JtkUOK4ldixXvrbPsXwo2X6OLVdLT0xP3vOTZRhN+O5mzdSc/U0vARSodGbZPNz4aEW27X6yBcwp5aQRCcX4QV6SGrKPK7m17BSvH0Uc+agmEeGDNwktzESYvQMSPY03j1pf3uHaoTS76N+dm3xc0D4ydYsmurQo3qDj5sTR6Z7jh/zeuMlakpxEReMZLwpUDbN+PintVA+gp1KsuJ3l8xU7geeYX1VqgQO3OgGMvGKTxZQFjyEly4yau47j/Wr52PUtfeAzlxMt1VHuEEiRIy8xAGV+IL+eB8enjDFtLMQTQ9aU3tjQK+Oq0U054/i0UYSCbj1Zf//r9TGd/HAkHxrrap6uZzE5VuZnPPU47oFTiTdE0pPzEbWhO2lkg5dl7wroV225q4fkh5zULpHeVUGJm+kq0z7ghVA7Ioz7ohKqrWP0CZ8fTJ816Xv+QyseXwHaGIQnA+tqW6+7vbIXrY8CxCDBn1KI0k1CWwJ3UarHknIDoSmnjpRpaZYsdgTWsU5gOjcgSFhG9xfjiX80pezaYJ0Gym+jNb+IODrMe4fjMvVoTk+E5aoCMnc+pP6ZAOa1jmVIzOLFLN';const _IH='332bd56e293691735ca944c36a9f099b66f0aedb1645d2608c18f9ca20ba503f';let _src;

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
