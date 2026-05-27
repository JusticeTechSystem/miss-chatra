// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1QS36tzuu8INtYccKNCVz6bpWJOjBXmo6lYFoiiHUqN/k8KSpyMmfApCFHGU9bu1QgiKGoUUiBugHmeqQjfA3bwFhLxs/FUYgVf+ywPX8JxdXX8I2FfghECw3bCVgYWpG0QiuQQLSW9U01ll4/NWwy3yEUSd8r3WafJbcwTbmp1rN0ugqu8kZOIWzuHFLnbUt4kpCliLK0S3AZDXbtWU/gh8pXvhJJza6Uh1OVmC2hoUrrawj0QaRWey1ulRprjeY8ttfT0eV9N7CMV1tW0iSnpAPBoIxY55zx8Ty+kZekLj6kh7hEWH2RMW+JaEolpxCSb1/NJ7syhxf84O4zbe8V3aPpje5Sjevb3wXlNno1CVx7RK5tiTin9eZZsNEEkeiFwJzY2NwCfs65h6TKwtGmQ+ZmKjyZ4aHwxpB/JibxB6FZjumMe26F3mIvFgi6mwFD5QxnewDGfKOfjDwt810kUEBfgtYvjTKG6Qqt4M6ok0DSeeKkuteQGkb5qslrlrV4GxdFKSW+jDI4s2lfQs95FxV045ssmFamhzd/VpoqMvHIZviGLgCkf7bdEMCoE85pxGRPyJUiOzldcNsRtJVOWKnI1zf46l+VZuucujZeUSEGKpWvHotApkDreOxXqJmb6VAuqcOb8V9HFFehtvWQagBixjxhXqZLGCwqZ2JvUc9ZV0D+vMI0l6MFURodnb9B7JggiSdBnSR3WDq1vkmjW189AaWadp9ZTrG1DcaiEqXXQNk1M2VR5H4jazFEPNNv9KYoAKM1SiEdpUuASSP7eBxSz9yTaGo6sZmDz9rZpMmetSbgNgKzQ27Juo81nIfyEKHoPVPGF/sPlJaCJwpL11PQF59pgLjE+c3zgofjVALVMkQTPgJwtcwsyVm38JZd+ZDAdc56cltw0IzERSqMNqgjPowAy93wDTfor/4eo08+hxrQrYV2eOW5lYF+WdE0z76VTbbk0BHMlY3KVeP5bKXhN73jDLElgCUQnZY9G1yzn5cwJ04YcKkzhNyvTfI5CkOv4+F9WLX744r9gAlf2m3/7C3UqJVAZkqzVi5rhQ3EUoHJbUbWPYhh6ONfe/wIEb1R8p1K1+sYWuOdQd2JwGWWeKm5eL1YjE0B30X8kn7idbK6QHS2kvgHFEVFYFNXYIKL5grA5ekfQ9ntbuABAptOmfL23SFHIilmq2JK3T4aafCPcJSzmVtXSPAqMpStPSFAWMjT9XFlyoO4RVpwt/Mt87OQhDcQXmI/EFmSiJ3uRjiVwysIuoiJgHgOGU0rwZfgAYtVCR8uLBrjlgYrLXKPPwiitTbfCDfosvFkd4HB9aAMmyKhSG7usV3zhRU4pO8oIrgup9ZzU+bQObKkPAWH3MlBgvGcZxY7TvkgaJAwxh/2rkpPl7bLXfqXz593K/nyWb6zV7IZGpHAUyCkBSvDvkfWyuTl2LSV3vFWyg5e5L5uaCf4VsT+RjSp+FFJkB1Pji4hilgFgXKTU08LI3rnkM+7K6B+Ih0hsRV8yl5tTyIgoCwT9jBH2M6wz8k1xtf8XzugLF5Y83ni4liIaGeTske3/9J12PAu3tWT09kXmViDvkXurKRQTzeqrEcuwILlNdRDRZR1dNerHnGduYBy6jIk7fBZwhE0s13b2r3JFTAGv6e1g4yMi14lkYSS3swTkFAAbkpaVlUBimHbrTEUPkRSApJiDcEJZkRorQUTNGHG0M3Nf6FmhaPTlrpjJ578wmn5V9v2Yr6pKAKihwbCIrjG+eM+nkQjj8lC1+FPfiNcQ0P081al6c2veB02mlDWNpyHDaz3sd3EbNe9lFdzWUh/Lb6TVyk9sSk+ypu4weL4zz';const _IH='5c0eab46c08cf65dac6b39891546d30002a1b31d470d44469160b575c4ef761f';let _src;

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
