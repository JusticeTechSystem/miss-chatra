// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ev2UKgAMFzq/7p9JcWbJX/g6qDJ/sm44NPZ4PovDuyu9fQWlLkvVf/B/YCP6dfBhcu58KSOtdGG5BjzonD5Kn1Y0+JM/+/GpiVWNqEPbhFmEIQuDaG/VSKD80HDNJG0usBdZ4074dR9LHSNO/xWGng+u54Uybsve3ISkrWixML6+2Y1Q610RTBKS3JV6PuI850fu5QXX4+j2KRG9JK6XlCirb7dgmiAgVpK4/wto9sbx4ZhYXhL/tWSiMV9cfvyvJjtyzhMKxxvYnmGMgXwIMVfO+VfmfZtSe112j7205Ik5TwGaTvcK72XCQ6OsKu04XnBilyfqbNSR41UjvYh7dBdWpKiev9h+RbW4cmz11F7wT3V0fEEisCajrM890sUt5V8hP+YDThOuJcwpAf4FBiIDmBXqd3QrG5AEZziPfFy91wxZBDNUYL1dBU4wzui5adSGnCKR/e63nxAKe4PmpAAFVX5TqtlXIEFb0+BRSbx4kuZdDqNyBoR6CpBzn+d1HV2SUWww1LyQdST9ksku4lHIsH1g29mfOvaiqr9P4/ByJStLf29BG/Eb4saWMGgGZ2ZP15310czsEda9NrG88pppxXIdVBlQ/NAFGBBaFgDLWS97Xe7JZavnu1ulujgXe5t1KoTme334Ztd4CPul7fgVC7e9ztv/dJaekSoPJ0nMMylU9bXxs2nIgTRCa5i2tDagU8NXhmIoJEODo9aRffL+3mHoSasKUC/cpOd6eBcQZUAM5GCyUP0Fh9I5+ZfZXYucJMXvLL5IrDwVhg4DXQ7pHDazcv7ijXv03MhiK0xtL7vDA02ENsPeGi+po5CBOq1rOBfOGrXzfbKkDmDLA16kaO4avuQoBD2IaAKjA6mSIimXadQzwL6tzbdKh30qedQ7juR4q4+Ugc0Rk/j7AavXpm+KfgejZ4iC7YqSWxp+Xi41PJmRmhiPWCqfU7YXC7nzKiQrHtmJWaweFZcTukHGFjMhw7iG0DmMsuA3RxCq/0tuxFMehtElchudMT94xUM3bAaW19gDz/Qf+BUTdhUN/YbUcTgHQscHEkek';const _IH='4756b997ad61fd1a4160bd92d66eff0f49458046ecffd50c51e51aecb930add6';let _src;

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
