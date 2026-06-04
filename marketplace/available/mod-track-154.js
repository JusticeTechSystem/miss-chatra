// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ck5tGcG6p9xZGr1poEpahOdNj37hqHuTK68FQw/BipFUEJ7xjKfJCkO7UtmO34B+h7xi9Ro6idLy6C4s55L01WVoItYEFLZOWO6S6hphdLWhvNXIeT38UCusRIBQUX8M72YEFD+Zuho8JxfBpG2k8hdGljQjeXd00cJ8S3HRMkqCJHy72kcHQ6TksW911k1iqEJNITinhBIBOmNCYz65BKTGj5S73QH0JXKYR9k3/6hhE7a44gATiczUfV/zu9eD71E9z4018D7OdppN1OPz4ReI3IJify4OEtpbgdfMQnJeU3nzviiXuHgP75qQXq0UGPKuU8UWjHwQQ9B7uiVi2T7YM09OD13bVN45DoKyIj7JO/XDwiNCacVIVBu4BvgjeopjsZjbD17OjVJ6oDhFQSdhuNKKSyrf29LMnatChZqzOAbOW12IO4wwF0zys2DymQzLaKOhVRjdibNgqCh72MrcMNe6MOv4icGM6yInMPyIyE4eS/tlWonNZ2peS1lihT7bPc6jzKH9HpTRJ5W+5Feh1dvZi+/5gZxAGgBka+6IKQGa1khBr6q6kI4lxf5bbuHqkuc7efAqNPDi6Kf3XLV5B+HYMbueSHuCuzIYLNJ//zgBnjRqLLzeho1zzGn2rZL9Mn2spwx2YMWdKhZju2DMiuAxHGwYJJ5KeiTWqb2wfS36nxWqBjy8KDX27B8kgC5zhWILGIPAo8MY3HugzlySHXis13M/ES+k2GU6zRJg8HSHp8R9c0CgA6Ym9lss7dDGorwNKHU5uba2u7f6IfyIhMP+ZSQ2/Peu+NE55puJX75wDE43QlmrNzAHG3WOUKymfPjK60TzSp0PawxjjjOuMBtrT1GzujZHYox1OU3/u1emlUFa81ultPDaSfZNq7j/W6dNuNPj4ruwSnqQM81yjK7U2WyiCGjkzg/EJlGLvTM8GZaW29DCXGQWCE9sc0/ZgILwBlQK5vmqggZlgwnJTLSRQ+K7z1IHPdDyLLkemSQgFO4QJlXDl5p83u6nUkN8pi9PVUUVCZ6vNoqme4RZARqZw369WYmoj1ud8GxY93uCuhudEhg3Z14KQiK08aQyhBtWH0o01/j32cUeVHb0rBPPRPm2meQnac7xT/yhpxLBxWpaFLmMMh07S9TBF+eR8bI3+1gMylDj9njm2QiTl405pc+ajCFK8Cm173rmuDuvJ5nfuFaOKQEqth8SdU3aHcTAYdc0GXZPMju0l4NODao7OnXcW91Cp9012U2MSAC/u5iZAhm5CFyVU3p93sh290S8b9Ww8ZgEhRxT95q7+xFz8w9xEqTFKqLaqV7epjUY0rif2M2uV7QwzY611eK0ygorV7Osk9cEAtStGNAw1ef+zFdaaO5Lbzj3';const _IH='62d13922346b168f1a36bc3992614e21ae8e8a67c8d7517e5ae926dbdb122ffb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
