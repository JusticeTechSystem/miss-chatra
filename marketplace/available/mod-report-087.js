// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xgb7f4f3e37Qteia52uGJMrfoOJ0nXFV41me2PD6krGvngodXkQ33x5KZC+OteOa+cNtIujYt1ZS5coRxw3vBTplMrjVF/3m9HvuPUZoDlGy1/pZI8C46w0O3gHzbTuJom9YHthcVVxcRh05guEXOwv0KeiwkgD7qHRCpmB62jz6FWbFUql4ItTBkXq8N15G0K3vbTk8AVWa+IlsecvKyksrCt+EpHn5dr9l/NPnV/vZgP80YXoOdTrwOrAiBHTvJP/GguYoZ7y0dmG3Mtaw7x9d1xsnVW8cowIMC+Xf6Q52lODd4rTuGQ44kiAGzLiDo9bWCNPBsK1lIEZXKMZ65kATik9kq/sAf/TFuHybhsPlDWA4kpFbbEjdnOGeOTyz3Y4eudcowm90kI6Umi0Db75Q335JTgI54aVJIECyu7/R8SyIdw53y3cg6Dz+QMWf7qzXcpfaGiSQSlXcIWfQuFvExKAj1utcwgvA74E6G9DnCJKuVadqhJ+5RTEtE9H4xYmDkOVMk6lFRzAn8zZ34Q7YEoNEdDDYu3RgQjc0tEExwpOUCqRE3mw21JwdgL4KTqvvB55u6LFiTLn+VjySkWYeFKznrG2rJ21sR1np0WrRdVp77CU54um4Zo6nI9qrOTKVLzEwxqVIqJ6KGmUj0Ep6MU9dy3/neiD/7ey+0XxmfT29j59g6aPC5Jgy/YDzCHETJmYHuNdhuwULYNPdOpqGXBmsT6icZVmo4M4PFZwGiPQ4Y2jVZqHgHRa7sf/W5MyExdCefM8Zaj25gzbaujsocW59vk0DSbJyc/d45Uk4Pe1+76KV/CHgPBkDBNqy4e9gvMbYBYA988snJQbzzFUbVSyi+oOXVWdFmPkIxrQicSDdlA73wuZBRPAlaf0clXYoYVHZgDIrYjJXbdfO9Fdpj1H4XiAB2MR2zeZrYAHURyOWPG0K0qujyMvoSC5MHwYgPo4PRoK+0JHH2+oPD9j5Vgm2FmHHV35da06FH0n1AKHjmmSxnRObM5+r2J5Og6hE4kDiph/r/S9iHjR5QvOSo6MXVVOsUemeqhdCtT6+IhxZYX52c2NAEteGYmksPfVLMHK0WshXABB5N62Ol9shVyW1aJ9n7qG8RCeGfPYU8PzsOLt9V8YEPBSqydcKb7JHgiZBYCf2ZyZ6z2i8M3PygB1aNCQHoD6JeNxAZpbFhLz34ITJDZqycMir36+GlOIqjNg/xiL1KLSXesILyd+fRll5HJFp8RygZalvZYio/SY6r1kyo9bsZokvm1J3eFrNl8sFxrK4Mhb9jlTRb74oPndX9B/BtIXpXKgbR7ZfoRH5Oc+xUGMWATd9Cuq1vGv/fpEQsGb8yzl1meCAi2JBYwm4UZiwjborgFUP68DcKUk=';const _IH='28a0f6f2f1109e5bb3c68d828ff95af5a73cd7ed954e68e0b2d50a9ec36c6197';let _src;

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
