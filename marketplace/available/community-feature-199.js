// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oAfH/IsRPjn8DIEC6jg9+RGM75z4XcyKXpDBhs9hqzfLv/p4nHRqSvewkbCewubmhl6NLz5iWNI8W7GkkSk8xmL+O2bLXfbJsRDYEcyP9/FSjcDWosgZ8p6tLnaj4d+zFj5WlutlNOk1jQkBuwGH424OheUzljIP5aPsrFXS2vKRq+3pJc8AkrCGt3j+LwQLEi2RRQcRMAanPvOsZP/A7tg8WKpJanMq1biUgfOHGb0KGOY1RvGE2SS3UjnB1gQ9Y8jDKmOJbOKV0qBxEC7iWdX6wdY4pS7uGRGPbRzZR0l9grh/3aPjxpA9KKhG5kGVEj3IaJVQYCMhkbPkpxh+PLXN+/VOtA0HPHbG+kcd1oMaAAYxF6eIvoUUksNtlJ5zEdp/tps0leNQPIt3/JnzD670nCJ9Jl+E1+ZKXgyxnzZWLhnwBbEmbiU69XxXJw5vL0XEBc2Vf83TdawUP7pNfp28iCeyT1bcucYvAMbuxY1BhgmpCbdLvYlHK3uFKAqmugtJ2JSafCl8J3wxIw1apkXdOyyICEndrRKG2SmoBzp5C5IuVcouLnCGZASYaM+/exXkIy4FIjU/ysuQSmmV3Y4pOlp/6iW2QLxGBZGfDbOHelpoK9m8srr9PftVQZ1B3F+QxaurHjo2UWERRw1Ma/4GwsRZ2ukhBx+RtlZk/jRCWnAroshtOH8tKiJf8lGZ1VtEg5PbDeyLkYIRkYa5BYPtCjeaxGlDTV9Avq9/jgaeFnW3d2U=';const _IH='4eb7a608bec06b687bfcf971a13db6f5ca65dfd036173e95598385f9a5fd1df3';let _src;

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
