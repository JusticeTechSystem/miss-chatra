// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ETjko48za/KpKomXK3hfbp0vsLzja7HTAvKt7njfSeHq2KOkgnbP5nXCvtJmv2x/TkpFOslscNy9CBVTBnL91cV8e4zmAxyYP/KShVi+bnY3wJx2NE+sCgtzwonA2mJZL1UCPXSiAtuvJcYn4ROQnC5w7G48fgYW2EYtOQgV17WRwZkHz2CByBVkZ9M/I2YFBxlofIJ3UC1Ge0iNrThFWmyfieWbjQBksSKbPxWHrJ3oUZpeYVA0/Ym7ozvI7k6vGFFZ0cORKemZEJlehHur8CgMeOCKjB2w/SXwH30QjpDnbCXYt133TpFbScUJMZRNfXwJRMPktsj74M8l5k2AEP+qOwFPxoViKaiuCygI2rciKejG/15ybEmc443iqxrW7tzJ3XiQAcTA4+z9JY6wb7gMapNq2wIjMsyJQYp34QZl2wwc/XFeioUQuh88TsvGyS7Sa93FIuTo9GQrtiVL9KlJV2760W+4zNkDVLd06WzLhMapz5KjsbnfY7hD+6AAHgjw1ihZ4v4JwWbC7gRohmAeo26FeCqI07CXz7p0r3ShEMf4u7IrI/iPB76H3qIdnPyPrkQDuevHGn+Y1Zlb6kq2sFYVRCzNZIfdopni/BAjEhKwMX/KDoOiLqfobxQrMdzfJTJ8/WACSZoYhWyj/rQUuCS9+lMynyLE6XyC+e6Jz0LVoi6KxivcwDFuZPPKWOP5rUsJixx47KdM26Yj0tw2K/Aacp+9OvCXDb4UJQ==';const _IH='f042e26ebeb37eee8e7345628a3251e938f2432c155675becd5236cde2904202';let _src;

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
