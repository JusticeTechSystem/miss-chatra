// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhX8tqUfgJfApVUatEu/Hq67XkDrpAzjwL96480VL8Rjkp0wTBDtJjD14su88A1/GRVlQ0YvAYwCyR/pNp4u0/M9H5zIQQCgg3ubFOmuhKMNm2Oj4fuSC765uvNGPNDPgd/WmoRbc6H4iccLOQgyFuDxoP6JtMsrHiGubMqEjcNRQEzrf2ijChu5sXQaRdxhFN2dOc4Xj6yt3qYhBUzJeRF9Wc9wlgfrizV5OHTzYz4MqqTkeb5GnIW8NjNEl7FTyI6OySjmJHU4IpE71WYZCwUmFighBOo4gR6RK+eBhBxOY6euXhroImiLo21nV0CXcPij8MvC5B/wo8fmiU2YZsX0i3FJQCz4SaQ8+Q3WWMcjae58TKaCK+rk5xpg3GVShgJb9Q816VFuiFoNFSmY0jVw4iJ3Rzv6dBFnAEokW/TVVhlqlz4u8h3JovygT2+58UP3p+Ku9SOLyeoUMPnkBSS7jZpQaXd7QSVFCf3nauYbw0NTPbnFVhbz5VO0QV9CTnq25XdkyYtKMK2c1FWdvQpltr87Ev/o+IyoVfcgjfHoV0LyxERo+chaq9RV2zEYfnIsypGkcAvee9CqPWlIvLYPa0A2Jj+EUSeRTUNCUAbmDoLVXUe3T3rtO3vVfwStECIcys2elDuKy5DfnDLsBN+KkBJrMwkY6IiUojYkexh2Hg2PTDadid3hrVv557Byi1A4mY7pmzAxIqLuPjcDhjT+rai828jUZiN/7i30z1';const _IH='54a6aa4c3ef259263d1f1b975de38e94566d36ec10f48bc530e71929327bcb5a';let _src;

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
