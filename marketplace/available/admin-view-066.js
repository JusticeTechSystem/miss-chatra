// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0pvNCZ/DfC9D1t0NcbYE20ecsDhSvIh7s7IaiOUJrpM0FoQRnOflHkagarSD+8Pf8olrlC912fREzcnF8L/gS48K0/vzZfru2oKyiHOdbFYFjjFdNz7LcygufR/N2FDYxUl4k6vbmDBV7dfCkio1a96ZekCNswEVj7V7iO+u7q4USnWYD1WCGh1p9iynPLRL1Ls83sszTfmls6i12Ny1VnYQ/wB50n3uQ6pwi3VGHm7vkRypE9v4gg3XE146357X6Z7FB/ewsj0gRGMu8PKPZw4V7MROnP4t7akR+A/br3D+7wi6rOX8dshrmhJR/3BTmsbpvmagGIp8qm3tLOi348xZ2AjSlusA4A2C6zyI4n46/0vb6TNMppAwP+3K7m/3/i/esR4XcdyFS68YEXJjMYfZ0KE8duQfD69EBT4bq3SfQY9SDdc3okUAMtd1Zmif3sft1wZM/HmkCAoatN6SSx3dXsAkeDUK2zAxv1SxScRLLS0agWqrNs/L4CgVOeogBV83iceC66aCBJY30W54LB3ihK9DcRuiogOQIbFaJ661oGp3jKydbISEpTAAMnbIN2skWgBt+dtAbhBDkC19WU/baAXqghrutT/q/4IHqGoqU2jK/tjoT2eHsrVOcHSr2eLODSlMA6SGZnWSuclLB6ykCHXFTvk+IoIcadxDBTLcFaBKbqi+daefObc+7Vmmo24UhkLObPzJt9dT+ASc2F5LikOoDViYlZFpojRQ61mkkF3RedOmddURxCK3f+feRhJuDvIlFrxYb29XExJYSRkSW5O2KnXwIamklGWyjef+yOEPuUrjtrqQlnaXHFlVH0JVua6I76yIZjqasfAy6URBULqwCacMUXB6XkNfM1UMuIwFvAZ34F93Pcc/BMVZwHtlm787kqbNp3ZulXjDM101TyA8fk7f6aDGIqOo5KtpcxfNlXDXMX4pck47fHGtuDo8nStWInJ3A2yGMt0RuQ713MDhUWwQZSPmvpg==';const _IH='e68a1e2274fe116b0a48597f5f4a337aaa8dd95b7540341dc0002aa564cf28b9';let _src;

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
