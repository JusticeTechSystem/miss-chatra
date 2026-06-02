// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZdDXCEH3iOBs7/iLsDwLZsnBmFHa2P+UXliJvJE63JAkYnY/Pfwbi2Ho63LxURA1KbOm81LqQISl6AI3A8Ni9o8wTmwnDO4meDZjKosiSQezBy1JGqiB1K7yWVX4OC3pgH7SRi0FeBb+Ph8NXRpqLNOgSsWIsmfmjd7vgTVYODLH5XjoBAkwpJIF1tOnhhX+OD/0tlwiFbIHtKF6Tae5TYO+7gASNwutHnqn24J+8sXcXrt3++90j0fQccdiFmEDfZEN/bMRXRvwrXjOv/k0BvZOcK0piFLKq05hONRbtrMbvobwHkx5I6jtozR/8tahB4H+x1QV8YdegOXR5LlakkOFt29elUFrvFSs7poBIB+RvXGPGwE4bC5o5AC0udEWBAfg96sxQoVgxLt1MllB9n0VWU96TDQEvwEFHFD5AyGCyCBhgeTpRLQJeDYX5mAZFsau8sU9dhFeaw5ZOh1hEi0xxVVycGW1PY7pdjLXFZFPs5Q5mZvIGnfU13/jm5BcG9vII6tQ0PVd3meewkEbX4LPAyMHgI90jRs9G4LJb5N74a02yxoUtjnA/uYEqZmS6NVLgaUQFcbHZXeWYNDMrKvhzCfC2x+Ave6WB46zTGdpAzqk1fSUpF97sRcU6V4kkRA96w5Dz9A0VPkaFjTtxM41Q9emqnI7UUw0rcN4q7nt/t6d+13ldYk8V5JIv2+M8q6TTlpEGNYlYloSHmcl0bt61InIrKklqSvLrcwmPG5xLzsgxJPDMDF/OgrZf5h0KDglxw/k46/5LVJzJC5DtuqFqkUJT5028Fi8+CMEyG/dEFxf+FwdfxcjHDUbOIQEbnWGlJCEBGoLtLfPepdbI2twvv/SPoLm7E+hBVp1p7y5Qhg4YYzcBDNibzOomb3PNbWkobhSxFYBIVfRkoBvQVqAplEFUP9WaXiK2Cwn+J0nIoWnXycALF3ez+r+flt/eKa5jf8pCP43nZgtAa5/Bmih03O4fekKzw6PkwpDNcsoxqpzy2rlVBrHt31vvq23UkblFt6Gx77Ugg2M2tHuATzbfjNfp3k1TN15Zs05x+gcquk3IMlJl5cI4MreFbavjheA2Owbe20n7jN3O4SakUKB8mnRJ+d6EFT4xSym2XxWvwSKlbLIX+TmRQyYxjqa8gXBCq/iAsbZv/8Z0BadZyMZzdN8cr2htjw/IPC6thwyMyHqAqF5mo3Q9+C+XJv+sTS6C3lCCxb9eGnJm+LZMy0BJgtmGG1e35es9U4Ljo84CUbXqiz8k9c4ogd+DmLZG43uHtK7nkyeBsMuHrhWTH3gA982Zb6IvdiHOgU57SZAsbB+TSXv3uf4TcOoBMkQx0MsxXLccMuZIf5m35PHyLVir5UGascBkhhBqL9TLOm4DC9xZDNBWb+fFd/UJTCkh+X+4C7w9iMxCM+O';const _IH='c170ec9be88ca9834cb8b1be5854eab2e3a483940eaee542cfc1317b6a944b38';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
