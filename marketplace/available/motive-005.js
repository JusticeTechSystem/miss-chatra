// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeKUgKdHDkQZ2nR8xHYKywEpTgCPeaDIoXBG4MSU35a7RphU7oS4y9lFo5dCYWCly+NFmJGRC+PtjSEry7St+sAzvTQeXJAHcLb0zr8pjFqBjLxYyI019bktUSuDA+ZUIwzPIX+wNnBYvJwuDR+4xSdZtyOWXy+EDbw/AfE8OWGXI0TcQWsdL/qp/FbwIEfJan4IjKqm8/sstaylkFaRpnYORVRXPwPrVxbuOhQkeVK02VjjZ6SjR5k7jwP5OZ/mNSftEDi9Qj+i+7QlBYACHtYTQ1yCoDLsK7DREe6qBq3fvhJlJRId/4EK3nwyPya/6vuj9Sp9C6sSLzQtCeIY5n5E/QC8QF6crAyGtuSQiOjjFoSsmS+yMZNB4utGmr3C+bURM5ZJQWMh8eIRNwKYixTwzYb/gf25jnvyIqULhUART0C1XdtLdFsNnYmF+hcVlYuMSInzW5uAI1/TCNVNNwqPMNt7Fo/S6w5Au26+Gb2cWX05GUtB+8KmGCyz7J8FvNAJhs/0vqA+1ATP4CtOgLHJ1QtEWmHiU3mFvuc6MZ0zMcNZLI+Zqp1Zh9/zIA/EVIJnWHwwttGSgmJLi2JjgudOQ8Sr1jSSb2daGQkh/4OpqZrT2iMzCdeqbcGNIHYjM/+zeWGv6dMbncg4CrltI93LUP2FMONvyz2DgO9cOcwT6fEpWPC1lp+NJgKEpOhxF8PNbI28VZuWupzvW9ZeeE1HnHU4rstjMqGnv8F3iABarQBAGLj+jB+A9eLZQqFCBb43Cx0IKSg2h20geKingoHXwxpaPvl2XC6mA+9W7tZCcZb7awq/DdhrvoxRe127Xz1M43SUONsiX439Zz/V/buW/72w572FR1Sa1gTGOyCGVfOQwKQb357PlpZwJwBRhS7/WfOOvUz777FjvUMqIDqKXB5bTrrdLPOkxJFRObdehMCTxEnttDBs0G4/10PkwuQrwq+CEGVpOWW+IBpABUGkkdwTpbEg2vl9L6JdLG9kixC3W46RL27WTqdf12UQ2hMg2f/9On5lQxw/c=';const _IH='a3d33529c04267bdb1e223823df2201b2e20290c7f4dff77f337f680642429d5';let _src;

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
