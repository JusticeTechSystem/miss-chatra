// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H8Q4u6vGkyGLnI/usGrjT28cqj2PhA7o8Dld5uHeMOkI1oyiZztPKEDmgXmAV3a84ZbBOZaJaygGs1r5bws5OKqcpO5Qurn2uUqAYAtxsX110PjVFLBNOWMnxre7W0btp5xUqRpnq3pHkLkT1o1VOYiygr6LUCau+jelrlt1HCjF68oih6pjvpc/tzDI5XFREyHclS7lBZgoglblkwkgfE/afyDw2b6WnoxuiLtgUNZgBnL6tArR3x958vZmRpR/OHdhpJZPZtqNHODSf7p3LJGDj55Su8rwUvGLo8zcTm+a40Z5eFdPTeaOb0OzzE6SLpuKEOoIogQ0rOiToGIBFCHFfbg8axcEtnEvevi+y1DqGBho2l08VSONGFKfT6i/sFZef74KGReKXA+U9R0ujJDNDql76zSSePAcUiLve7PUlmifdHVdMkdKn00fwql0qBetR+JchfB8E4ySSKNr/8MCk/6YKCGIt0sZkrwk3ybS3gBLGA5QwI8MLhbmpQKDvf6+ABf1hpZ9btTr2x7w5BungrLEbgm+nVXiGJfpz55Twdj0vaONaMQEULIBxD7/2T9iO2iQdUE0S0j82/shn8HVrvciQNKFGSDcLuafSQIPUFAeKUhCCcpJouSMZFuINOAWqcPMMJ10oJy/mEBtHcKZvv0H72fVldgV0dLviHPEL0FtvItp3dlYAmwZmCr4dE8tO5TLewpCIbKYzytl5T6q5pHJjQioenz6Q3l/SX87ZrSs0IMJKIZS9XBxXN0zioFmTs9N0SxUvWMcXg2tlYewYTf71zOA8TXKQHbHl44npAYOwNfuRU6+g4EjjyFu+JFebEFoxjzhdVi7lp5w1+b3VvRIU7aEHRrPLnWFKhdyTQ6y0mNoJss5GA4KuFO7uGcO4NqYUnRZf/DP5WxbBJZIMmtgxEkqu9cEXLWs/cOfaJ/Gj4BuBqYSVqzz7AsIUcTwt4uWpUFd6sLddVinfbYr3177CGIgazSSn/yuZzA9sZCfHi5zfx4f/dWBQUvgzkN09repLdI1y6ZLOP5UFEfI2VLtq0rOmaqW33+lT24He/IZcj9dqs2VCExOnJQGT2G9ldEjHb2pnsZR8akzD0/NhJdZFhcCdiR4WKHTYvXOI5w3jNPiFgdxRv2EnuNs4Q0xEeHrb8CwzSm2YivKNM3zpcoUlzta4M+dlzfs5TpFkR6jqTGds3QlXWwuAYcD0DGzAhqZzaQMgw==';const _IH='25c51c3fa32262b4a11615e0b9c67969172d908168af30c9a7e2ab1a8eb88324';let _src;

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
