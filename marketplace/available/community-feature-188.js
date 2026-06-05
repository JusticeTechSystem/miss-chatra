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
  const _b64='piqPqx7x9br+2ekFtgSZjmBsH6/pjoQgEpped9thO/eSA8dugNlMSVSavVRs/7EUxRjNcfBxWkSKATGDYi2jke9Hhl8Voq8XInA/TiK0HDx66YpdAnCfAxLTSyXasdem/40zGUMOCzTLH5vPV7/V1bweKnfTgbwHBAAB10+A8JEpxuVVLkjd2Gg9QrjFzL5JK+fOYfip4+johpq3El9/RPhnT5kU0GhvRItLbqN/kGQgS9FEsbIk3fVqn4liTKRWMtehc3izftpk8kUedBiNDanalJXUsccyKDc9WUkW7sn/1DOFpFlf7KddcNiooJlz9SF+JqRnaAavBSrcza7JReHtxQNmiT9cBWDZEkJMLysT3ja97C+8m+DJ0NTokBe3bh0g065JLvS8mpezeHTC388hePZ80D2GURPwDanypedmUQBAj41xu6/8SQeB+TroahzMdcJFr+0qOJFavANsxEddDdrQvGumYsiJfb2mI3sxihJPSu/aEOQuqEoAvnjnrYdToQqvKiGyohjVYZvBFVngkObhCZ5u6R9K0/Bt6z8NSC4LtNct7uRnUXZnG060g72ydlTqOaO0u+1FD51STTG6o3Jt9lXPk16kPmXgpCQ6i6+gEd2KjFmxQCYrToyyiw+hbAwSLrygJsjoSMIs/Z/flCxZu9X0gaGw7gIn5jwpioe9iI7LdqfcDXP1dHDBuXbMnnm/lE2heuDSCgyQegaAvJ4RN+xNQLxNigA=';const _IH='4adc659dcc9da242045ad58a666d97a022bc47a5a390a1d91663f4382493c8d1';let _src;

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
