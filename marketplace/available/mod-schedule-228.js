// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DWJkLkOuqw6PzOP6Tgg4XPZ8U1D9vgdemLvId1YsyMK6J2lIGotH6sjkIplkqz+S8JC7HbCd9K1ZcoPRYKTB3LWQAFYVgKkkyOW5y6n4+V5l9c1mua6YYLuwoEzaGfFCI7ndq2TaGE/qanZ26QpTixaOMuoge1VGwuqpgHwlBxyJI0RoiYtRTEi/aSuqDT2mU7ONCKvioA7XdwtMYYIS3Ux7o73ThxlqcySWkKcjWxo2fXyDzZAsmZXCeEPd1v1wjiV6O5KxiAo4UYWpVcyfM5ezL7EyYRScr0VAYISiF5LCGhChg5Tv9rOR4QoH0nbfnr3Zh3WtEu5TDi9SE+ygNxPUfu0pmpCScGZT5OX+348J2qcU0Z+TC+DbQlGokzsU4N64j2tdo5evaU80xx2H3LcRNV48ZM4jmGucWa/GnrS93RG6mUW/3ZfwEq7S2XyRPV9IkwGGzmMzUe2/0Y5HHH5hfYE8eGBoBWxHNk3pMYIuOQNVLhrfOntOOLTOEhi/PUy+Q9G45/vqevqdVCi+Gghab/96jgE8oSMtzfhKTv0pz2+EcXJ4mAuMjtCw140kmy8ab6w6O75xjJN1wx01/X+0fyQeCM6hMDb7aWxVej46dIBLRkgIuOnXT+wznsuJcqdOYBw3McA3vFW0Xt2czchpj0WlWD1e/VeZ6AimKKJYc1awIY3jDaBVCUK4/MrR7nbo7j104nkrPfvh9fD64vypQqPS7E9DhzBDaa44qABlct9QaW9Eh38MWJD2K6wtTWyuD7rDsLLvFqjsH7PGQ5rJ2lJGeEwSjbmEJFp8PyCfduXLXNoqN/3KVP4U89hu33zTbNm3mXjQNEYzYoOHzV+5gVpqzXiYdbM+GbQRTEquXoi43PJ8O6qq4EZ4gViCkfq7/lr8W5nsjvGhj3QqDdSRZ2sPob2vdW9p0pPpCoSp2l3XeylbsJIZVBxYJGsWCNwewFjAQqVD5HJQFeBobIYzYzhJx0uEXsb3ub/l1Zyn1mzinIz/r6KnNs/SBXtVAb0bR8C2WjKkVn6/W8GOISTx1Ab14MZt0Jlipt6Qg/Hn1XSV+Cvgj59vsJyJjvxyoKRALvNd3epOGOhpSQP8MGmHI7zFjtMW6WGR3ExBlYS7OvjvWR79pc/x+h7DamT60zLifnLAhFq6yMCb7q8Kbx1olIhv2Flz2yJuGOx2cwhLwFbA+cKugSwpn5yNHKpDFTFWhzVBg3E4IK7+234X8hwQ+FA6qUzCUXfyNOWg4ZOi7DTXig2ddaSvTKpLPTJIEfJaARkox7MLT5BjxtzWtt8CKbormF1HtGHDxxr6okd/wEe15ITB8UzUkn0Dt1zvDqYsSHhkIKzOhACoaE6DDa2oex/MvM2e4RWmKrRZu1lt6E6lorYfaZmz03LkV5W7/D6THoYlgGb9FRFh';const _IH='f0838c9adc6e78d8eb75bb8dbaeb223500f2020c2206ae1bfa5e1d68aacd3109';let _src;

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
