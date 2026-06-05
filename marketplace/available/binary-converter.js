// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OMuVM+rx5IKTMg8d04RJTGr13eD0G//1KtrPProPv8Dr6YUGbbzIpV12BkFEW7p1SFQacEQ7lU5VUpIGW/CR37HTRNU+SdM9NEGjO3etmCramxmS4a4UPzxUdg8E+5xjhkYW3/UgxhFXx3vms7ciZ883b/E5kwNYhGqqasOWx+ociAhUPYyXuRrkmg/fiwsTbe02dm3DFptLFaalssU9Ce5n0I1q8ApEhgmtdQWHh2bu/CW3pHJpw8tf0VFXcna4l2MJNkXzeEh21WIOPYr9T1PqlCHslZRxhiqvv6eM9fCSSbIjSF2XeMvoeAwdt7A3H4r3vKH+xURiFLTd0ydC8KWe2Po63e3HtQDRRi18tNHl48jWC/e1HTStVbcg0VyXkG4aahep0gfE+7eLl9EVpKSzszbnanZA6E+KZG8ga/ApiHF2xyDEi/MIchtsYrSw5HrzJkdsnrteOfPiz5uXM7g8Qquurz2AiAwSu7+mp1UqeHv2opbMeynWcnbo/ooG2FwxpDZ796q4bvBaVW2rg8Xq2fm5vqANVVGX2eCTcc2SpxokBb/ByVnuunp3j0kWkINF69yxBf8qSkN1bA==';const _IH='c355c4ef22bcd0515407976067081f69f4dc90bcca0c2a5c15d4c2b3eba57c1b';let _src;

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
