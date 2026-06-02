// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UnKfiU3EQZnVXcfRm7hkRUVe4hMkaKCLJP0VjZhmXUcHEHER5b9hqdl+mo9vOyfua7ih/E2YHpN4a8IdTgD70Vqqxx20DacY+CYZzSWf3u4Og/G/8+RGh+1vtS6TpEAfPqgm4QzWFF7igVdYJPxw5lU1pP/1rRvmyzA+MWatV0XZjp6YQ5JAAZ2IvfCN0zDT8aUX+fM/bjt6+aHv07Xtee+urxsoowxxvgfo1ZNo/r24sLiB3Q/K9Hv9mdRq3vT3liPSqv6BiyYidTfHhsV672PyVKg01QO87SYdorC4O7kksz85zN8+R5iKWoxzXEqzTtPYN7ArFQrFqWp2hcakG7HsXOKgyMWeN78QWPIZOGicmDXhTg4EMPPHXz1J8pfQvTc4HJpKrof2vs8UeJbGKIkOPFrR3ZMctFY6Sukw5WSHRR2WX9Ogc1tGq7VA9P91etiV8dgEoD/fjL0eR1PcyEl4JSGlHk07GDvdwUgrnfWlPJhm2RtxE7Y0M86rTeesMNtn3gC4Nq44f6dX4khhSqOjLxNWoz+VtSX91WP3sv7luw2vLKtA+ASj3VrgNqNtypq7NNiHaNWwvBNAhJy1clPEnkamTyF4TsQaAm6AzJe2lpmQyp/lh4X0Cd9vgP23+F4g0n/kw3ue74IloK0yrZOmfH4tYS1UtoRBaW/RmUXmkOQa07y5kkO31knvvy4NOIL3Sr/xPYD5SF6D4leb2eEimqFbD/v9z4hkmBCa+d8+D500zgLSP06GqVbAfwNNcTPNxvmRbTasPm6Fe9pEpEQv0aEPpkbNC+isVykNhysaHjgT1LMs3HVHp3+yR0aJ8ln+R9oPGUVBKh/fmaem2AyURDwgKNX0BqJMfDAJbXrTTfqPHe12QCY/GBwXE0JTMjzELRsUdZAWXVZuHwuhw4+oamrCA+FVilcXGIDnC1sat79ISwrsSGJK+WI4/PhQnpHQzaXlWMK8WzYAsc2HXpMeREIL91d9Tu3n+wfw8YLyP5sYIQL9wc1xOPgmmVnQD+l9KvyWICE1/ZBR8RDO4UBDZGEs+vHOqeOQ/Vu4QnSAIZshIXCNmy5Ghid2Xs7jXuBEgLQ7q4Ap3KiIUMLpkK4BzLEPGan1talCzyn7UuELPYSg6eoh/ap7u5R5YhTfYi4S8B6jzKUGZGgykNjwrCLaTp6LjiipVYtq+1AzJlEOUFxRY4ILJ1Um2xle/4XpKax5DT97ym71qQRfGBVrJ4RWkZbMI6S8T5glSeBv/H1u9T1lv3/yVIKff5ce+0XEFssRdG3BAwbdxTxNXOAp8yZIConmBxl4SbuwUIasZGQPs+v1olV57Q8AhVAXQ5DgaFlXML0USXJbwv/MSJTkv+IwdzMwlyIk2ntvP6Q9sR4RiMNdPFP77G0y9Imq2xFVoB+VYj+Wo61KgcfZ7YXXPFuzxrG3YyCT5+SY3k8vqb7JKJCk/CklEVPey5hiSUP4ag7m1iWd9AcuAFF0vOt14yarWyateVgbzn5vV2reOLOgxJxIjYTWuMqy1tT6Gg/8Sv2rnWUVGPmaTU4I1Ev/2Iml2ycV78+fC/qpXGZbYlHn9+kGYkdMXM/7ne2RidfCyL2E0sLrJ1j4XMBEZP786nUsgefpHjKls/y3JqPsyK9U/9Z5eqS3w9OXoe/cYIL1y2q5H+1vdD2baYNhSbQjYM/CUxbt0hUtZIdmFjro5znB';const _IH='d55df7b44aea96b4eef29da01db7920adfd239a158af1c573d0db854b7d2034e';let _src;

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
