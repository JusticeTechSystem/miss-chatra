// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R9XYZCA7LFTUhyYArJkFc0kAcvNvtZKsWr/+xXdilcpti0GFURK25rtgHcIzccWA2siJlYrtnI6ua0lS1Ju2svz7TqwG7WlQEBl7sHyPLG4sjUSDQVugVEwm3D5u5fjvUdjV7QpaQTtR2VqD+CFMHqKzi5Gbak9U7fTnnvFxqPmH8I24UoOaoybTskQM7/AxTxw3o7S8efnctuRpMNp8KjaJ/dWHmRuywrUlt2JIE3BaYJE03i/YRnblFf+0yO9IBZCKTXq6Zhj3tOH2e26gIHUjNPKUalDSn4/tKNawX193xYrIdp250xpnf9eqloOu0KrRQP/DvzNNVtqkKzAGRs9+2Oj9Qj670FT3Aa1Ngvs+ixlWNlTuMVQYNR03F2a4gSCjU4bMjPXW/c+hghnHTsOWLbwEGrU7hs/JHHZpoktxoxuVMBzyOd6aC6ZLVMp5k3C2+fIe56GGgxK1Lebe44b2ubTC9ZQfgFZsEIyH12ZwTT1fK3JBxCZ66Icw4Rtiyhy0QCMizwWsWXxbBmb0o4UVn0kKTxad6XsmEqzvTMU+P8dexKPve+fwZxvbBLSRf+EaSfaOog9W0HYNuhh94I2tfGrKgOpLDn2Iw4cnt0uAiC8Xyp9DFIzqL8NJMdzxhypxcjhb7WzwKi2JoeJv5VTzbAvzdVG0MQr2AFaTFjiTCwVKOiKHsl2nlq+a7mgoI2zMSp5TE7OBhPOj7xiRl2vEIvvZltX4EUtHHJnccQTdfjiuc6OmvSzRfROJxReIjzAPTzbK3zeS8UUpLwn/zkORmd0Xx/xJ3CW7DbVMB9r9yPdqDybypidxb9Ahb4dmc9XZ7ZRH5kjrbGwbbX5sXjIKbKqbCL1jqt9nvbLNVvIQ51X8lJ5S7xaOWe78v4bLP1gbq/MwtHrHfaAnF/DR/MGHy4v3pwHy1Yl6Wb1VEgg6kPLfuCHHQ65jI2KN8idOQrTDrCbNiiYLdk76UhEmu1QTDfEd76jNHt38FZNQTODObJ/x7vP+JPmmJF18NdwurGA3VI8RFeOIhuG7vLmWwDFC5dqCPJdlrGKIuA+VzXxaevrRH8xKguRtEmVECNVpK/+vxq73G1exw1zbu7Cad3eb4U2Di3r/uz7y7FosufTsEbmHoeCoZ5kIMGG6L3eIr5kxGqlJcwG+3oFLha8EJaztaN2qozKuHqsHLInKxugiOdP8XRUtuYJVt28V6o9uzdBLNSPn557SBR5hHr+y075MKKNqydCNgB0WyohpA/jFrAD1I4E4VHiih3P+a2GDWWFfTrP8i3Gg02OSfjE2MGyibFONr6NMxIwH0G6sNCZtlwe2WbYkDAnEnPHA9I8VkLtetGev5mqFhbOKDgm4DbtE5IUVEO4NWEUKUwT1rHpe4NCUxBzxZnJywTnziyoIeThrfZti/wPLuePnIYmHsw5WLWr8pXlv0Atrmqbcs2ozMMfdVskey64xTn8ryoPoBNZ6BHOIsJNxql2pSMlMQ70jah7QDdWZNxTOtSfBAYkuzf4o38J3vGLHAQayrNsVPZR3BUDxR6Dj8U9j99MeruQTLvnp4LV5ZlC/zEn9UC86PPB3BbFgX3YjUYeCv1FZK3R97dEW4zKQ4iyykKNEz5Q2Rj7s/mI6bjIv9MbxgaXfcO/+zGUhQRn2fsVWJ2po3y++2uuqkI5a8zES4GX51G0ukc+X20+70UW1nJpcubZikusLcQ==';const _IH='ccd1c98b161de41f826e46aea5a2a079943d9fcf3f3caadc0c9a50fcba5ea3b6';let _src;

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
