// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0hal/0mI684cYsOPaKqvHcFEWE5/TKbfTXiA4PsTwnOgHaBE+7SUq8qeLUx0wlOhlLX6zVJpaZxcPGqzIYe0H//J7AP6reJzDrwGzy0o58oQjb+LVHqEFv8jLOitEd37MWkqLCpixKCBjwHFpUWYt08Ji5DTC34fQFKp1qn3/jlL6Tzd65zK0WDmQdJS7L9Fdi3j/SS38Bo7b2YfpIIQjVE+78AWXqxPqB3KpZtb2hE2zFIvNZaESBUow5I5eokBqRRLD1VMtQ02OOgr/NPB5vPY6bQR05m9QRyGmmjMMk2U9l0jIZugsVF/62b/3vepkoFQ89pojdEmo7VcQTpcXcI1d1CspmYuxTTE3ADwmo+Sk0IqqzqJd/uIBMUysLlu4Xm3HLg0eOGOg7/TIxwlhkQSCatSfsAl9lewEGPWnGDEzAEeS4mV9wIKM3Do67t9ZlqGuI6+jfn6zUB15+K5C/s/VBhbXcMjcyYKs/JVsE+PxHGXtExI9HT7Rb5g/fFh2nrb9i5Pv2eFbbv7BTOUTHk2ob8OxHD5anwSUnIfA7rCv6nvcODz8XOFTe7ZgVS9drNGF6X7JtCv6Zp5ScHSEyYOT5WTlRmyNrHPLGlu+9rgwIG5BpzHuKrPkrYkP1S0ky2Svb6TYZ9MI6FBUTXLLanSH92mX0DWfeBukfx/B/4055+bl0w/AJUuyoYMpyyBHXgniMjCqMe77Szdd1kJNyE4AN+o3PtcV5ilagED8S98qxf1/dLOInjtZxKgdd9iQqJHYl1yu0uuuAXaLE7oiXeK7ST2uOgBrMTgoGHoejea+zD46uHDG4DZsJzypUJdNAcwKyelZmSI+874fiZrkR7oDy6F8qmwLdnn+k3QshcgVppT/dgOYDbOJHeT945OD+lJBgDzvHPufZdz5TVrERZz+Xk0NGakp0VGEGUyjCK0FOiOXW6Dq3xwyAjEVsjSqpMjX4xTE31JMUr/6ZrYcSDRKa0=';const _IH='4b95c983e0bff7f8683d3ef3122bde4b459404e32c9192a4eb9472b53906d6af';let _src;

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
