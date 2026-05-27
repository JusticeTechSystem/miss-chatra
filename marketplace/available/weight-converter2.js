// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='70HfWkuOf+S61qx4UUz9nS3gRLuEuV/u0eNZNpvny96Xg0JC3KH2ju/YSTtBoh0QtaI7c4FfCgotob36WhWChjn2ZnexroBltwAGTnkUk6IVHoZ3RsBRJEd+Sbe37N05VSRTojVKzQcOlnQH/3RtxM5aiaW6bxChOBhfyQXoIpkFmrW/APnbiK+q9tIwDkw+M5omZiOxCMTEZ9aBN/lXYEviB/NSToEMRtfM/9kOuSdbJoksrO9vROQsgOQZZhs6f/ZYHl8ui8ncZmt5pt0bKLL6FU7IaF3DJFUXaLofT0KZ50B4hnBiQnB0hefomO6tbsp3NyyBQeDMQmjqKC/gubzXNo8hZtcgB/c2J4owZ6/BykiMSBc53INaPnTUAc7bA0FSp+5nMsi8eT0rXoquiLHMs2nMOCMRGvQS4lhcfrDZmyNvcGTZbO24y5Ngb3IqO/LlunnCUp2mz3GLY4Ytc6Wwp8Gx1XcfJ586i15tU2NQ47C1bR7slYM3Lgq2DhZGp8UsSwczlp9/kqwm2rsSX2MaFaaK4D8aQet/O095HRm6uYJzMuJ8YQJ9zRnwDQi3p71jNEUykMsVRj/xZOdnt1PhA11RGDBhxAjCSJoKjpQgrKrDUWgtMtbiw1kudGyWZp2BOq90OIaFh3jygZhBwzKZCDOYTUtkEkm0Frl16kqZ7KMH0SUBRl36vYTt43RKYpdRe5/d2oHfGYT6g/XktuaHOhymUejsKKbxwf1/A2Q/a1lq1SObzk4t/CVsMYY8ERebvkNNRWdqFHfvzNVXqPbM5JN0mVn9QTjnKPZFng15mdtWwNKIGhFrPkL5vXjQ9DwRQdCzY9tfndXOR6EDm0V9OwNM7VxGPTZY6YnyqWmRdSiHqzibYz6p0eqv4WUrZY8YJ4MUizhU82SGscRUXVX9fbhK9eOC/PE5r+65RpoFJFWLUylqg11tpSL/fglMIrUKk/ji6VCoFTm/to/JJY/TDlKGn35MZu6LacYB6HpnKAp2GRCp4YYRlfrdkPFVMjDV74ZWgjoh9r3U05zEZ5l2YQsIyAqizKGdbyCiDalUxe8U3DIoYi/rBGg9qm1pva+C19bgwnLar0a2djwgbxb/WJE5o5YCmpHUEEm41vuy0UKaTyfQIO16aT5oRGbZlPHrWU7TTvpP0dhLtDrxISCy6cKjr0zx0vwS+pWQi850TezirtbD4ciRuwiW74U5CKhQeeN9erU81MMOHmyl8TN0IyAmnMhD0Nlk7WIrgBoNow5y/XiZqENmqJzIpzEBNKV42J7kvu3aen8P5R3+5yx1j+7m2riKZGpbSiyQPZvhKbQvnBi0OjKp2K5UcHSoICSg6ieDYH/xGTZcAMyWtRw8svVm7GpTsr7HdIsUkIG3cfixJPo3lp/nB+/hG4C+zHb35gV2BWlYirkJarbaWEljd1AkDPbBG9Lmny+/I3Z2hgToAI3kjHk3rDZcFyeIgzcunbmByN7egQlqXWPKCmQeLVdq4sX7yCWuUyGLilaDFaIgXy1GuSlHM7/YQstlNDG+RaIqad2gSPArgHPBEVbUUXivRPFCh1d1sdZwvHEilbV0JnzoeXpSETrlci0Jj3pUn4vy/x9YUh1b5/HpcgDfOOJKzyF805rhCzh8SezNg4M33DMMUPiWSuXG0xNhdzT1KpnHova5CqQsRk8ABT+JSRyc7hbukDV3mAqtY6bTSUSKt4s8rwxAD/qP+uzl4AbR88YJXG7O75LwB8Ke4hV63W/VWrTyug==';const _IH='9c73492ce62c9904dc8f578c46dfcdd367a13738d0ee7b6868885217f0d0cf8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
