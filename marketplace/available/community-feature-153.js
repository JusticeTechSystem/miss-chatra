// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+17/beIZmaPDajJCeVgtuQ5COMpORfUz7ZGXFZ0nsU54Y0UUFPevFR/QEUbJY1R04NmQhGmy/XANkzXBpW4xcuo94iq5s7079STHpIpfjLVBauZAqaMb1KBIqZeP8QR4b9eZJ1Neb8u6cSiwmtjYRmZ9OFprgqIudVXwg7E6hxceVrN1K8BuD//Xp7D5PSAhIyfBF4D69PcCDqQU8D9RDl0ezR82ZXPN1TJ4VhdIHR7FCIBBIqYHKyzGouoJSXGC+oEraRSCJw1nXocBEWGbJsuGusJA+H7SvX5FiCUc0aMibgC9xbeDkKCPpbdZAx9PhoxuT92tgQqAC7um06Z/9Mp84xIpYVHNPvjaHLdiXRY12xHxZMlaUnPur1lCxAUFa37KzVQfp2iTM3U/T14/hEoNQscANTZQ/ECrKsEV629mCa+6LfX3HrDaFZsd1Plqox+ZPWKFNieQ6qT4DfkYEekJSgOMvLt3Pd7aenb6CrN7LxL5sH7kiqAxDTI3zrG0zlvQO+lcb1o8nvuQisfsN2OM9t+a9qfukuegZafLJhWZcb3wMDipjZlQcCvJ41a415cj0jiNYZ4RLvz9cLDTigJRgDcDdhCHMB4k91pusUtsiyvo882GpKlBTPz3B7s6zz5Z28uN9ObyWaia0mWT/dSSmnrLi1CgfCarlfH1LlKKcWIL9+fQkXgkq1AGs2gTPJXgSTqOLSrvkgNjhfJzozqjf1IZytP3ZM8jPmA=';const _IH='09f21c811e3f9ff1d4b55891e89119d7f4b0743209c98f0531900627cdb59ad5';let _src;

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
