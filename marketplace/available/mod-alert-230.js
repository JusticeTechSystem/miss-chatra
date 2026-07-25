// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmycwyq4hJgcmBGxz64oqtDncAbAM+Txdutv1SINMkY0+EeDgsIVHES6h81eymB/GBHF3TIMgGyynlcdGWjN6vvsfkT/GgvtbymI9pyZm7f+rtMWHEmB0Jsnkpyk41IAiF8jAC7S0+k76QoOoA2xVhSI9YixlajjSVdzh/ewQ78998LoLu5fpgscwa8ZzrLaiimbRMvMfF9gzCEUbFxvQllCahqEUQc7SrIB8zK6iRwgjCRy3l2omBDOvuBQqtri8QeJKtUpox8+bYeLRYiCE++hhXY1uhy2XGMNex4ZIIG9kdYOgXmpmV1Tz8HlFre8dvYW7pCAcYoE5ViwAwTwWJ4qko5zFkCpC+Mo4DMAOBp4nHzlNyGtq3Ayvda1mjjGfnrO1U0/9FRgPtIRUb5OX9lq5wIVlMUrJnBRyrVs0l0pkOtC9IPeh8cXzwoWs6KIcFGU7ugT8Wo82XhwoONLJUHN/x4dP618QtvmBIkT3Fdzuv5dcWjoOXBbtpXTLYAwMgX/bTCF0EVz4LKipfgE3lAM3q1bsiSmxebUW0VSfATEOpNM8r2h3gDFAU8SiFu08nhbhRmD/RSEep46dsmJm+OyARo/6u5b+3bOK/jpRRRlL5fQkm6SxsGXizVhuz8wMvLfhGmvXe19fFUK4CIwyewjHR7bAVBTzq06PLfM5LmVQrHRZ9hYVu2cbjPAcrLDcfq5yzFWEt1bp5T1tGNjVlev388/0mEZhnonxZptqAy/JGJHbwqPzTU+bdMG0X0WW0//mEI+7VnKpmzvt5gFFY4bQ/oFal5VVR6fPa4+BtzIvFtkeApkXMbLnsea10724AIX44yVQB2Hvf97UaEnHZ70UsF9Vh/DEktVSPts9E/fNYtMchFz5OJ0H2dQmF4hUtPgVgYa4nGpOG/yUnZH6lsiORsc7rlkbEqTswqKbxIKXYyh7F0SXrfxuS3hrKTMkgrO9Xqvl9/FrqcW/Nbopxu3orMX4/97gmlRPdfTbEQ6Dxxa2BOfRcjjWQgJCmxDENPQT23Zpv9Q0/0tb7vmNBBLfzTQtpJFLozwc2vGUy3vaU6yJGglwveFBTGSlDaHK1f2MOaZv5HihMzllrpWivd0kow0mPDBCB/s7QCSc9FN6t0L6JZ/OqNCDyKsKF8fbEOqG98qLpKU2YZBcZ7GsV1iJMWF5yRdUhsM8n2r0bYY9rdS2o9vp+YTLv9f3D7GlgMZvFuR02Xi/Ihds76M/lTQkS+ew0jJadgpW7TiCDQRyIDDC7B3HdVexVXLB6nYOUoz0G0K52bJZK1VOSDytd7avJYhe9PTLqHntrLmZuczAXIrneI/z+mPw6iKsB8kwbGbDhfgB1I1RPog3cTHzjUopxbBUXDY3Yaz1+WUk=';const _IH='8a7a7d6e010bd2db9f9adae3cbe4d190be687e3b6c122ad97a849c0062029dea';let _src;

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
