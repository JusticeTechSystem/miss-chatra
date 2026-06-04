// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Z+fDeERWYECTe2KA9YjD5QkpTq0M2wdhHi6ZG9Yo70Z+uaDRZPPWuwKb76OP0MakEr6i55zY7nRtubxHqF7b9J5cIjkQnZNkTD959zxKnlYTEzc4fe2XvfW0FudHRkDsvXvSQVDfnFIc2sS+CU0umZf4Ao2/cQauDF4NKvHJMwPuAfciKCQxx3oWH0JqCAmXDK7gun/wjV5WrQxdmvee08LIxxQ5ho6DAPyJMejaxK/PkvuiL7g9JbVBnPPB4ZT5/jqQLlbH9rfZ4EbMmSz7MYhy2SP9iWdFwgoENMMW/4X+1GDHwoxooKzmyulxipYdbizde03RNO6ydV1Z7if625q0Urje/FS34AguVDnPdIlN34wtxPTtqy8XoEajfRFjRONvg84TODTVDfoST9RoDY1kRgRXG8cl1Rz65yotatopKbkI+mfCs/pcY1vNOQf7k+mZtaF81lB3apyP+s7YC5Y8fbR8NuutbvazQh4g8HiGUxfx1KdurW7quroQ1lNhb5CBWw4ApuiNowLpZlZhgkmkjRBVdi6TqQEHmU2Qr+YvT91DnqP9ucDBn6BeiOUgPVeKXRgWtilPMTM7gGzPTC9oca/XclXrhx2ijY/9p3yngysnYka2TBWtllYa0djyla1H9oTAvUVlBTwZF6TCjh/DcQ95/r7+liE243hkL8TJ8kAPH+oFAPuGrzbPinmS6L0T059BP3geZdeL5zIpSok/q2/80GYuI95unwHjMe2uaePOgzGQxXfVIfF8Xr7MZrAkC6jwq1EyYiuAdjfLUmwY3XUJwB1grzb/rGvgva8k69LusMAvD9AAtQPjJ7ZuIslAlBeajLqGLLKTJh6E3jpSqH7qphbgvrJyDJzAtQPEaPI0dB9eANIPomKj2Rcs7sKlJ91I+jZENqc+9/bgfu7uevV/b5+rT3BhZ2XvR7Cp4Bt/uXVbgGoaBFCRYZ+QwZ+rmj+fDLpx1pHuQ3Vz+pjtoinNxPdi6pYOA==';const _IH='963f7054794172017f88add581228477bf01fa80be7f3967ea85d5021e7dd130';let _src;

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
