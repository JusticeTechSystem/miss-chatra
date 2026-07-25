// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRu+WBF0UAIMtZ1u7CVvtcawWJhn9MGUgmJIoBi+oUgA+cOTU45STFS2+G2XfMmuYpJDYX9z5AoNsiItJ5a2nbqKlcA1KXhZHfHO+qJsGsUiRVNHYqVjNME1XpiF7DhocwayKZJmNlTTlLTxoTm//ZoNfBjNw6q4i3ZXXl6BCcnFLC3d0YXVIcAKKq89pTLC7+s1pPi0UmejpBn4Qk/mtV9EmuixSqeRgd4dBfkLMPzr/WZlJ6tpWem7nUmqAwiP/76rL5z7DpJf9ZMlCD+inE/lPI7+EU28vya6P7yY3tEDOkYoxmpfkIunSMVOtByfG+lm+lqbU2O93djs8/bzeo7HSCuez4P7SGMZmb4mw40uPRn9v1PGsagPBEBSi/fHCxpCQG9MGLJPfconuUFH9z+Mf92THnrfhV7PU6QaCsUbO5GvUdjHFLqSeBvpKkjsEXjbp9JxBB1nnTjWxzzEnVtAtcDGCuUnoYyOYZLSdYx5bLVghjgaaSKwuPnTK9DavKvZUYBMtoMq1OAhu01wZPAYvlglku7N4EaGEhI1RnHlq3HO0OAJj5hGBTMO108z34UJUDPqGmTrb2+8Snl3V1QpOq1IK3RhCcWbz+s4tcVezQr0CMrmW+a8wUW+WqThPhbz+ZMZsfr03GAkBpPG5W/nf2Ed+TQVN7ee+Ac1mFwNEgv6JbosIUzA45zDON4jlMEbX0wX4SqNMRTBtusJOOeGp+1PmeLoqMar5mPo01vFA3oVKIn0QO719vTxeaEnWunm9m9k09mpvNrjydYCN+K58umI8Gr0FJwhqFXcPnmCWAiRUpnhPZMl42/2KnXvMOfAF8ix6Vg+S14wP38qhNLGl9C8MwrnM5tnKrQtwRisB6/IK15LEiokWDMYQsNyIf4IEGRb7TCega+ukjdKCGgvtMKpaO/aQwlaC6vYrOgSuhhcQSml04pKNb0P9sJFSPsPhac7lIOrwtAfVaRKPqcEQmx52n80Al2JuY8H49GdsYpJ7cFH8HBZo4Bfd/zaiUQ';const _IH='c2fbcfbcb6fd307c39d58f0e7ce4a27950f38fdc8d94fe56ccb1cf98b23be4e0';let _src;

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
