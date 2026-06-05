// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CY55+sf9ISD9cw/k1bzZGwFesQhjiPX84JAWDJaioPmj8uezONhyASUTeSlM5p5+0Bu3U6m9hFsZbYmzCkLiuoEC2tA3rgNSnY08hlwtBszexq4XMfA+jIdUSUcDevtC7ZRnUMTYdzGcsmN1XTE27mTvd4mBnWugOp6NbhDIH1TaAXsg4fZr9UepBTPKkL7g3ap4krZAFyD2QYnpqVlHz56P7Ko0lfmaohNhgFzYqL9uhvXA9TbYWa1oth2SrVzp2IXSB+sf70vZf/IGk8yhnXdUobTXdbeXPoW8s5Zr1Oi94bozmkuq6vdNwQUCeZ7l4YxwodWFoHW4EB7vv6S+cyA5lGjzgJQ7E2bJJgy/T26Rqch+V/VL00Pbw5n3+e8od7AydKyxQdw0JZJJJj/zTfHYX6lgIzwIck8WQDS2mguHPUl9F7PokW9k7PhW2X+VseZ7PsPi8UDinn0k8JpWAD49iZbvTHBBE6F+VBJPi5CkT6Sb536othcr3bgyIfetAawLQ2wr9htlzZ0tIEyCcrwPLZBh/SrH6BH/+BVZ9aFS5w4oT2Lh7gJ97JMAYTBOlq0Yyg7cC3M9MVx6zRt/qVYmgliBSPfJy/NWi21/SkT00rPJ4NAPitOEgmi/6WOpRAWzuSlvzj+1mYkyqXkZgGrBOV6Gvtixx51opSk1ZDdrpfi0b7+LwJKEu14o8bFVsI/2hMSlGt+qv8kNqADrBLooIZhO+BS81djWhWcLIn7N05HauWYwCWYfdBYAry+kP1LjZR5fTmtTVfxh0kIbmR1FYQeR260kc1M90WjLyUZ7wvsYH1iaF6+LKP5HE7qYmlVPNMq3TvlHGUx6e/RVujAgJhd68gytTq0mqkMrLiVqAPw9e8flgWrkvLFlvO9pjhFSYVBBRp9/pCBn0V5LoKKQ9WJGj+7SVk6rpuH1sSv49Ien7X2n2tfzkJZgr6HnPp3FEf1ztkRrT8nh5jpRQO7bvR7Av2NpSPw5ggq02RH7zN6deb5pLNLpDuG3Xl7k7sBx8GmBtwv8agaPGaIXc4qyBU8A1f8obN0p0nYjv2Ar+s9yhF+51h1UPQtDk20v1HVZXfGIDi2PUBzk2lPyXKN41/P9juieXhe2rdTWEeS4taO7+kGlVGeVBwZhGyOAkSF2/eC/OCkxjxfaFk/44hMG/I8MAKLLVScWQwJKFdp5bYNZXD4KPj/UVmQcGmgCczBKW7C3cbqNqB4lSCG6axI/kWgbpALcyOebBFn3l9BQeadGVSgNECPrxUkWqx5McYk+muwfJ5038ZUjPi4QBwPnv+ge+6Hfi/6vw+sFNhzi0dul0lO74w5f575oRlL1ar9Z6ONAcegwfqC6DZBj28L9diy9XlAgHOu/7Okzv0LKbBUWjyxIm6+PQCJc8UijqTV7OyqG2YuhDg45yEAHQ49dFEm64d7c3m6rMUD85sze4v+3P0yrYDHFAv71kRWYbgfMebRXFg5fcIq+rn/W7JMLXMDogYksq4dDjG5qYI0z2DmvP1ytYj+5ARsgtX7R0b47ntuEvBMV8pSDUeE7ukoxsd2Ryx31DHqCLwfVwUpb0iiRJ563eTf7py4q+1iCqx1oLY0=';const _IH='272e2f73c80fb49726bcb4a2e2db7920b8502e59c04c78a8e50c50ac93eb949e';let _src;

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
