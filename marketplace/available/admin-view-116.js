// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/I7fgbXIYTY32UA0TUADmvXRHiVt30haGranbJr0MSN7pHKSSxmbyGy8IiRPGrz+t2E6N4WZlCwGxwPrXJVE86vj7oOFYyljGKXaG+gIiHJoee5uAuPQAEY9eHKFrmczSYz2icSQjhXJjm6GUJGyOUesm0aMu47JdKhcXl9C9xdSviV/77FiZhtyzXVFcpHcK/LmHLwDszF+smurKd0xFhu2MoSFg15aXO2cN3E18fiSdEw60xiePgW+kYDAqH8xh5xLJSWtPHA6kr1ce2ZAhmn865RDRTraJCTV82BcKGye/15UGwzJFny9K+YSm8cO5db+wWN2vDQ+AnugbLeoTXoxqjhg1Kj2F2yeMngX9/0R+ffRnqI2WmZdgD1/snqaFhv6eRabRoJTm3IoTmm3WMsDKEPXoalrZbytKv9cQEjbn9rYsMUbSTvJAxD1ROqeModhV91f/NAOVSbjZku6LNDBAi6GF/Evrx8PDg765L2kJffiKnnLEDbd3mVR/2UaddPgLwT47cp96MpU67hBDuWtRBnGK4wCUEwDC+ZphQ9PhUExmzeOyATzKIp8Yjas1B6bw5f3XmDZPhIIutwM+UQzp4/5tzZx0wGweDwociJ7Zxw4Mo8/70ubmvSpkkf+iUaWSjPxa81Lf5Lp7CJkoy2AwEGcsIVkEUwyf8ripXpCtxoGmn8fG3n5/AHB4S9hffuVCzPwgdQxp6/qGBOUeJI79FD0dIG8HzutYfhNgfKqEYWVuQaDZYtunrlAJLR+ykHwqWCh8jRbHP1KaZ3sk0W1KHgGIKcfJki5RomAfon7Mgsnr56Eu5DoYxkBgeCPVtk62fzK+Yfp5NAyGYBr16L7PVoes3nk/A10WIB7IYRWtMClPpUCt5PlH897FvKzAJyjuiofn9GA6/tX34luzlcoKOoMpoodq0NPYNwxob5II9mcsIq1Bpa8tqjY2TyLBjvdwnMDxuV4ViYtdKSiE+/I3aICXZtp36T0ir9oxQ99w0c=';const _IH='5c4a6d5c1c8822db2dfb3778892c42c9a522b061ae71415f3dff594fffc8a380';let _src;

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
