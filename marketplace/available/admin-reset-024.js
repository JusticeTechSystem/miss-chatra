// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4j2W/93tQCKy0j2ASmbs3yC4uddsycvb47vyobahDYzvObC/3lMVdySz4VV4ILeBfwlt9aIlk2/fRqQH/tOGSTbtVRRNvViDE5LsnR31eN3+/jgDk0bEKpvSOlz/yXV0ns1fernembRCbjdHEJEAGu+JAj2gvNjPm7jWa9ZHYhe42uR++JakegZUr+n7bUKeVgMPKuo8RnZq0+gZq06me2QUkEBrW60M4/Uz/XLpYLDd2lVvG7tB0BTPfbvV53kfZG8WPaf8ebmOY3Oj9H0v1eSrH+M4fcmui/iZx2cVntFu9aWVo9YVNAyRHUYbxVhdbuhBw1sKxyR0LkTBNZU7lHmNLwRXRq3cTcT/DHSdi6noek976ajLcjs6NVyVbSRlUA+PSoyE4ShfFpQFrNmys3N6MOmFiYGYIgKBtcSlq4l8IHk14xdkvX/v87L2zoyXW78JXvcfa9vVJTveOJ8TbKG1MzFRMS5+9GnFwGglOEctHP2LA7GwHrkcL6jWSm0BeYGh5Wo+VEYmIrXcYA5AWZF2wydqiSe2RvmkFa4OWitJ1MS3vaDGqR8gBqzcG7SrQslYI5QuuY4lIIz9bfElBazMHnKDHlSxPSI8ilf9B4exMqpyLDaMpTIP+EtsKJHCgtZaTe1dhA3bZAzjjDkIUDm8XHtUsMeYFE5sVgpP2h9ZMZJPNk11zU45Wjupp1KRhtGeVahOhsLSvjS3B4Zbvj1qZE5kJu/l9tLDsoxcdbIbCRIeyiAio3DQttu6+x7Jfvg3osqbmpBJsagU3jnETNWI1rv9xAk8hkKKKxJ65huo1pQMF/ouiH7MXXhk4k/dmhKRO/0i3PXVB/yBWL/zeOdDvHUqZaNuC/WrU6Arfpo9IV2vJfFJvErFVWoZujTpEsVVLUFBThfRotp2rAtN5oneZvPhhd/gJXDp0WPlW4ewjFlqVtGlusGL9xDR0nN7xuWdbGpsE8Lc0z/+dNxSJW8vIHa+oBXc4pKZsVR2xqy/maIQN22';const _IH='b7d5d7bd160e96253af88116ffcc2655fd1a9e21cff97dd85010709cd2d44983';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
