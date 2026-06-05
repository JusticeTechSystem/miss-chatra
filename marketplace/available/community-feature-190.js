// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CRMVBpNlTnm/nwP5uieh7yfZVhRZbriYZRMd6us88lnTZ/Dde/2cmYlR7In5QFtDDI114pRLKhZbbwO/Kucj5JIb3pjh55sFIF+FAG6mlf27GunBB4B0GaW86tViQ3ViNB0ktc32n2ft8xGOiT4SCgN4fk9lLUbx7almRPFNTKE+hzs0xVNl34f2adFkUKff2w/uJq28eeA1mKegThHfUh1MfjDl8v9k5z8Owdtt3uBzF0D+kRVgUf1BS7nTo5FN2z4u9A0Q0sbULxrTfRuheCjZatb1t/jYOqlwCh4YQHFIvgM8nQimZ3xNKN2XzVfXzbiO/GkIwt4WVwhipRoKC/ETsIfcp79ufXX0sBVrfZ/yPqKwGo8cnXRHEHdBua0LD1mhfY1ESSMKkbskoqyvG0lSX9My7KRyAOaCRJcdPOdaw56riBpnubT1sWqGP3tx9N4Soohou98HXvZ2++oNyjp2PdjeuDPK+HDGev78Mo2V2ttdUFKM4qx5kNrETBhJVlaN3pdsRPLmrviXF0ydgnhhwr9r4Y16mBYMEikgL3Ig6mZz7FimbmYtzSbxCVJ+GTRlHFrO0/CMW1rdijPRC0eBGUAblWDeVEqK6lYaOqejpReWttH36ymbSoqyX7GablBDe17l9bt8uGjbkwfA096SplCMo5yBZHvne+X//nbTrm8Y+Ccximsj2HEiesbBpWRitioGEq8TZkDuvnMJdW5PQ3dubhshQR5TbzBmnIzG9ZmyMBS/iVvG';const _IH='3e635c107f202d9d70a1bab8f57f6449a356c040b8d9eceb8a8c16761cd40541';let _src;

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
