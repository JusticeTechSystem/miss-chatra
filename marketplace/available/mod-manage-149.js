// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sb5q6rxx9h1SfiBwNdO1tZccmd2JR0BsYa1DvKD2U60P43Fqd7rcxeBQp/rrDNUDOKNARbg8ddE1rWyQjeYKKKIcTlCJFA/PVplvVCuaA854GoYlBoarxYnUYEJibNNU8+q6Cek+myuaF194B5+CwtF148hII73KqUW5MGFC3obGAxM94Hv++KWJqpxoZNp0251vYee+AMikJoTdEn0uJGN06fdlddvEDssmJ7L04AHPCAHXPa8rjhzYvFRPXi50VMCDKjXN9N/3+Ty18lwF0/EjmO6lc8B36seybT33G9S1cKKd+rd2xx6/hkG9X255+ISapw0uU+GOY219by1ryTzDWYGTPSIs05sqy62MUgh8DgYdqrknGfpX5W/Wn1pjGH7LWGzB23DaNU/zGVSPGk1eJfyVyqL6TAGLFxCmWXuBOu2jfrpiaLbQRRJj+LiYJuANqdCxIgE403zQt9cHD9NG+qJr1xrvGZ++RMSiLyOYKU5z/3fXPE2KPEBI8mnkCxaIZgj52TpGGo2F2W+soiP/i8co5ZWpt2Q62qOnMpNFhID/kuciyxV0tcn0PL/23/9Ef8qr8SbiJWYBcsk6oHhPuPerVB16o/395huM9ZTpzQRTcqUX0Q7t68c89jpSCGmsaNQxX7q3K5PUgUVIT13WsYyJV5cePqkuFaqDJ0xORKuiJd9KJAM4caxTIU0IYDRjrsvOsEKtxmxmA+QmHnhknyEV5SmCY2nX1c9kslkjP6thEvPnsrNVArsx2GYsCFoucPMQ05Go+9X15D4RrfcpuCIzX2uheJBKTOFvzk/lB+uwujdK2By3bae8rI1uP2CxPqVsv6sr0qrmL3xlN6piiM8uAJKQUW5ZlVovYgcjbKSNx6Qcx7yqm9OXXDPyd6QfeFWgKelqCOK5BJOx5LkbE4bs6YA4q4eQU5C408JozaAsBCgcWxrXkwXIyXptTKuh0Ann3XeMg25RAxWHEgey10nE7IhqkIR0bzywrT+JcYpmwOHtAPplNI1JZBvB2bqgdePxBJK+C5SpfDlRMSommR/LgtTcywd1g4385LmKV1phanym1TezWZoaeJ27nsAr8Rd3maklORbmfPjr+wDSz1TjE3vTa7v4T3sTjbzZYYinePi/6/r8+cxxEHcpuktX3sYGQ2TAGBiaTEswzSvpCgIZ6Mh6em2FgjsqpDkAXs1Spk5KYUe/ejzu+Yze9JUMyPjVcWPQ7sVfdKN9f67XNoNGXvksqNBVUsp1dHzk/VAx5vTxThlGZv7jHk9QvMBzO2S9EBNO2ZVJxIiyH5KhJ4LJ3F01jNocMvjdmjDG+7uboIHJZj8nISPMJ2Ztwu4joRNAsZTaC9rrc10DO3eVvUc0+sPQPjGM11rJxIwoW+SHJbsydg==';const _IH='c862eda3e67564c966a654b89b1e0d0ced6d60b34e5ab6ad5c228ca7822dfe4e';let _src;

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
