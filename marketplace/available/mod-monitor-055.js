// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTffYEcgkmiV3ID6Bu2VbQLCTQKHbg3fAJ9+TZdf8ixVr2qgsaBxKKdU+KBeWdtgi60wCh/0uM2rvcTVZCwzU1y9zVkV/o82hO550xLug+JrgVTSAaNGd7CGWZjGzBVcOlalYb/mSd2UwPeukn+alsy6YMhaa10ii0v0ndCdUbEl0V/u4QOID2rwLnloVn4gzInY+fZhV92GBqJX/5pYa/QVh4yL1oDty0ST0hpEPDX5W6KDvQ2FwT+xyZlBqrETCt2uQjSVrMNtY9b1TL0AMqNjNlyhmo7aTfwixgz2fDMazL8FP74DXDgdpe136i4cTOOQcAN8pPt+KmL7DRFha3/9E5ycxL3CsOBxWnd8gl+BurDXd7vWPyZHI7qdGzZbn1OygBtkTET4hQpMGcUPtcgbQCa+CX0BIiVEZmPhnfAhwf6qNeRA4Me6SFQOvmgOIvWnXvbvo8UtMmNuUMtWg14nI3WlUm7yXqgyZBy0O/mXkJLhZffqRhQBW3SNaW0GCBTbFLbIpMgQZ+HlBWvEGKlc0rBVA9aYU4OJRu35ypwaphc1BoY9jcM2ljadmKaFO+iWKu+xe4QDo6Ky8UnwMSAn1UkiZ0IQ0uwq8pjb9Jbn8HiXkQ7X+92HjN+0NSvDcJgl3NAOjY72rFZQsyUokLeBzjuTx1LDeRKn2in0D025DvuA2p5ng6h6CBDdlI+3VW7WVBd/UdVnehxkAi+qgzQb9Gfn1v5vMmBWQRA2qe7Aa2dXa76X8yLpWPsaTYW8A5dJMNaD3xQ7R8ngUwjEDWSNpCF1/ZJAUEifOdiIHidasEZC/IWHz0MvQ/R64LDcvk/BMUKVGGFz7r5U6hDnZXtxeOQJuQKryHr8RPMLCN1WK8YRHku7DA6AV5+wDD5jrK3HebLsjYH/30xsTGdeN/PPrr+78xCKi0YItV73fLphs2ewgkYW1YiNOCxD3HQnOxpOCJN5u/44RwCu3je+OToOMRu6vxfZCI3sX+9IswdjQwUcsp92wCV8JdDxZikPyykRUxEZHCOgKg/q6+0xsTA31T1UjZBWJKmHWMMbUse/VrMSwACo6CY1xqXjoLkaAZL5O35FtP4aSbDibF96i73bxAaP9pVeRTldVpSi3OoU/SnAmG9EusSSDnnQHU6FOPTUqOp2aS4SPalJKdLCpqv16wg3KwbjuqEFr8hCCBC8T807S/+AEjfVO6cOSr4HIibOZdRob3O6VZR5G+A4Zc+DZ5Rc8Aem5VvyGxkcVpLKAyQxmjfLL2Wk80RGpFk1iT6Rg3qBgccWXQLxKGWv4T3DdSF4l3bLv4G9jNCN0Jr26aNXyiWyzqORfWoutatzK/E2KdV0Y/fYmq/rcaAHuj96O7obDsAo/kI4Iqw4t14lzkNM7P+ey5qu+gRB/Q=';const _IH='1d432e6e0182baf7961b0a0221ee385559c1b26dd0c3582ba7b2d6d19d1b481f';let _src;

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
