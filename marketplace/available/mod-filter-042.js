// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaPaA8c6kc5CV0VIhQzpJ/9/Hk126fkiIXPHjB6IS/eth7o/Mw9lcUR0nyCM0FvT15q1HR1FiYcMIN5qB+tRfODF8mcYX2MiH7ZlSmQ/L4Vee0OXxbLhNVITRrZmEDD7wVb3UpssTh07MCj1wyAPbnjYhNdFu4N6w3m4iXg1L2yOmMIdfKWpsMuYi9PwN99t+C0QT8ZMYOBTgG4J/IeESI824REQuctncxYbGbsABfRN4uaCZ2sUUDuBBtSPnZMXkkaa7Q5UzTejN7v9zBgher8WWaXmBUG0E9tP+0JPtTC0wxtho7RvfKtvcPUND+y0Pxoqkrw7Pk8wnLtcMV4wMWNYoPr1GXgsiJqq/72bCorzDXmQy8ThExBTWeazoolV3PSkS6VGsTZWLSAeHCUng6fgMJJuzzPy+iW64T7A9ozrU2dJhfjsysuFJ1D5z1Y3rZ57mCuucAmPprLkzcdyUR5MJXpC+uXwwhtaEbfSWGnx7pEQrPzVaXgYdB8l0QNA1wnl1UppUmwOhgLgcogHC+D6aQa3dmIdcnke2HeoJHbrRGCt4kUgYb/Zf0Q+zE7gCZfObXvihI/MLNmR7zPcTzICYSFt0PkcF5dKGfJjCbqbyeqHH7aOKgFx3WcRbPry5/THDLoFbx0OTeGRRZqhgoCnw+yI/e4NAf8QaWbbABBAxGQOaEt6wU+peSKiucL6z83YMNnYinXURiDQ0uulVN15+aq9PvdFODd7gKuIK+AhTIDF4PIvseZQA4dQIR3Brd3O3xoR3eLtSD255g3S7GYplTVqxpTK+17cWmoO9ySppb9PhcVea8fAUQJzlaN1drJh/rVqT5LAtXuXSdlbgh9L9LXNq8Dq2nZ+yppX8KHmz6HxbkyHSh0kCBgudnAMhUhvlzTiWj3iv6D9BK6G7GiuiMk4niWf4aG35TZiQ2P/+IFc4NVthD0iCwzYv2fpWeInlolCC3glSEGd9OhClt8YPbKHJ88lkPLBHHxGrjz+f1WKupb9ff/5z0f2SDxmioXU1yZLoIH5mfhuvKeosKfwvqyZUelx1w5AxP4m/PSne6UzWdulWgfwO7jQFtRnU2HKlmLTs229l2yWZMb90uYltsik1hBy/2rJ4FDjNad0A7MpfdfOSzns1lajXyoSuORjH+ChMCK3nM8KUm4/9wX2byXD2aLAy/ZMrJt2kSoGkUVhPd8QzoZRSm4QwdhHHPhZQydgFjxCmrDs6DnhXEyts4usCv8c5fOxKpUrWRJbRwV90UhXb28B4t8KPCfYsAFwjJjjxtEJbqQHrgWiqVoK0/bepUnNSXF0ZwGA1UiGkeIN5Q6PaY3AAjv9sInWsW40pLpTUDIzEFz+OaHKNlabsSf8nTEYssyLwrQtjOLU34OA==';const _IH='a498bf4c0681137585917f8a83a3981930cf4e00c9ffd7533b8fa7238f31d2d9';let _src;

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
