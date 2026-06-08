// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='md5bA7DHKbP1oWyRc2vbVfDMasdFG264/INd71F+79NVQN8Gov+zVoj7HNxe+gaMAJbqPc1HWVIn+tXnD7gAQKiuNzwF/uoSiwpMGTnM2e9vrf4E1F8ZifsweMPcGL6El4cOgBlu4DLgnNwbCbxoDpD2DiuE97iin/YhVrAB+0c5l5Z6ckR5Lw238aiFj8oT9AkWz4JbKRAbkWxEvm8rFe3xeoTOEbWSC5DZXhKNueUIhIIn3nefmBb2xxkEQW6gaGoIEGI+LuKGFdeYDDoUrSenEHBIOOeD3/0vDdUuzL+25gxcaRKIeUqj7l0Zlr63e84CYF096nIW+0FWM+vFgKWY+RTa91tr1StxaQAPFbx/unq4pccyiT3zjR/BAvvqePOOhcFhuKlA8sWPIn40FfDrS/VZf7aig6499sxT2VvABeIxNsui/lahiBKthv1vz4NMDSPB5TVh/Gdn/A7vkvZP/SYYwJK1PYpQs6pBVgHFEd5H1CZRqxP8lmxO5XTv/Wti9F1xPzM6+229YNRu8ccxZtd4P0FNLYpqJeWHBKpVwtbI0ZgDFMoZ3haQLyAwwcv44DjvXMaQKE8GSf4xj80KTqzHp3zInP5Hn2duOSA4vC4Qq3uxxyDtb9/+xQ/EsK9CMDanuBWsMFuMf9kr6pwgc7tEgTCQQa+pa049fp38b6XrAuhPmUjyOM9e9AKJPbKak6u73FdRLSSQK1c/nAUnmVqW2QKylKOp4qnYvNCJDrJu6dup6W7GNAfl4WElsiJWiWkdaKe5Z3xFAlLuLB4McAikqDDhK5tdTi5YGbhRQFIc84s+Kdtvq9hZhhKDurHMtr36KkU6YulmkGbMfImix6mrYJmfyO9OkmDcgsv/QeNnT6hUB3+POAn1cJzBHnkhrRlFc01mjd3h4NGUYLrxxpn7zpxcxYT0k4gDB+bn8NEs1MnxhJEthtu0o7Oc71HF2WNMbp40KbHwDzKJ0WQJvb/ypFVIwWdSzyt9DclUMGhgvY93IfEbUw3c45Zr1MAMfCyvlpIC1b99eT49PPS+X+KxmMYvBqbEsjfxQbsUtx/w6GfrXZe+ojlV+19cfwQr22xOaSVDZHSKw32QhD/8ztfGR8jeu7U6JLUt1Jh9Cg6bNDEC1JPbVEF+p5zDUUuyHE0zl+imhR95JmqSnkc5qUPFCGzUwgibRP1PHN/xAO3B1UtMhwE/fAbCON0NOAtZtwno2eJY2+wytto=';const _IH='d3e5b8627a8d14ca9386f9462956fb2cfe66edb34d9616652791476a9acebf95';let _src;

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
