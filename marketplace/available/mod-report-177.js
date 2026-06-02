// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a3LWoyReFQs4K/0Uyq0dxZfQlxbxJXQyKo0GVOxKiClQteE3S9fVEk92gxPxa6J0A18WvYBrTZm2/UmWCDB8gJ3L6id/dGekvvdPVdkPRxz7muvQqN07WJBPAkvf2/6ZFjgvLCAEa+QZZfTF9MDhrRwYUIGFkRKxUXLpvmOPl+dt+e6lVvUzoGzNS1ztIiKRhLZgScMdikRit9z/jtvsvPqKD5LGnCyJkY2idv/aYMvbD+9Avd8//VTDg+yI29HxagiT2YkC04+AQnzGVRV3ZHiElv9I/WuyO+fpvnE0P3EYoTId2UWlilT10nb2yl9HnNhcRIu3ls7lp2mAO0PnE5yzNjuLr1ySKNALXXFvj1CPMKS2Dl44PVd2nEOsn8nzrQBDgsYYar60MyTOzGWf59RbqWwfxEhiFp9HqwGQ/rB49L4QYXva6B92RX56ZPyybk8b9OtqBBDGdVPb/sH0mTHYAMFTu+KCQxCMK6ZTK1ZZlat5bsJ3N/lSkWNyhu6tarxoRcWdp/Npd8xInV+NH4bdlL9N1qiGNqjKQp2gsEbNrxJtOpjtbYnFWdlB9FWeArOrU7v3xWxIQL3FQvSey8LXtdB9YOeWbJ5cbGwFWBXDRZlbUaLrhAp2Cv8FF7VdlyPBv234eBxl4KoHkaW5QXFcaJtO2BrTkWDplMyNS3Cp221GSA99UxWOHbs42ZtzltuWF5hSlxWcfuTGeBiKzJjLuGzucKA77D/MdRbNz+LU8/P/FbhLfUnCbEDl22xg1KBE9Zr4KbqzboGY31h9ZeYgm0Pj+UnjjccKn9zH6UiF63mgwFjXoqz4bjdOTLPF///pnztioOiylrF99E4tL8107ZEj9rMNpfPpP2j4vx/y7gn7VkhU2HsHrevnlZJQG0lA/6eY3TcTrP3NkWEcztza/jS93TtJ8Jc3W69WpOmY7+KExaBRQTm7ZkqAkv7F7P2fYj2Aq65ApYNIXhPsBQNURi8KiFspilWCd2kuhhKjBSselxwMuDGDEBcOqbSFutDk+m1HWgc0g+o7iOy71Ep9/BTsNh8WzK0u9Rdo3bSWMmRMkyTXKjlZNNDAJG28DPE3LdDEBVCxIgHjloov+k7bIu7VwN5lU4hLOPg9fkz/D2crOGup+CbvfWQ0+RRmN7+4QGIiHpFGaPnmoV6W0xS94v+qJuMvA7nUhyLCqnnrAzR+xv2lxZ85UHUA4j9zJt6OE2J6f21AEROL8cxg+PWJPSNEgAs1SyOBnmEGeexmbcAHOzyXiB6SIxGJTVRqgA520kgWzibpb97zgkseyHLEu4AYG6u1gEwcX23xOVZ7nb3uGC+ZuYTTpO+yopOGWD7ADNSd31RY5Um0Kzxr3T06nuxDLPSysDvv1PkNOV4AK9ni7Na/dw==';const _IH='7c08ace88e5a4963882bb97056ab92387b7c93ac55d1bef4045aa63c46572d03';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
