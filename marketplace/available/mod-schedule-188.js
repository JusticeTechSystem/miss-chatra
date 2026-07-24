// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrephu2fxrpFFXPqxMVcZyqPanqflkIAD1B8nvspYKzW1GmiGdk5dM4ZGWRIzIk1WMaW56S2I3UxYF9mxo7XB4peRSYNRbwLkKxCEf4gCNiJ5wEXqL2BKNKYizwAK/YlkCPygxwLyWBxlRxVAtWcauiHzaTE1YyRlxP1REW3H/cXRpnLCpoBU6Rje+Fn4tt8fhcLeb7+oRHAOMT/b/TosSZrhaHyWUKiZoYReJSEBXF7skAcxNBkBUnIWrbpX6krL6BynwJDhdTp3wUhiipgeXf3CtDcioY7KqKw6ubB538pklWF7ZR9XX/5qxZtVfdz0rXCRbPJOyaLO1e6o3qo9F5sHeoViSW9mBU80ryWdMBu8IF7kr3+L66S1zYdOBXN7WqkQW1odIixiLZnyLr7JvE5KrhNMW2lmzB4rHEM19yUwVTenkKr5xIR4NmHNYztI5RacqiD/t+52A5+Bd7h6fJumI1wyHTCigQ8ZHYmELSZYfFek8D3+FYHGzPwNjVqz/kJ9XKHwfRtPk6kT/1FhGupoyQoAfK2fK6PMnVdGUUsNB567h6vWwSA6CfTmCSIe9BSuEwqmBXtH4CNR3VZpf8tFvKYXmWQlbjYZoXXZnfNl+cuj2wcJpyXqzGG92ZB0lWzdUF2OnYqq/F/hz/Sbn3zfO4AAVx9e3jqzx8Fv6B96CjmE9EKJC/LRE9EYH7dzPtZhWX8h0qwEOpNAwLxehf8FUl14Wbvh8pczmMO67F8/bIdqOVfnUnh84TMjBXmwm/KTdFT0E+1/W8i4ygGKkF19gFuI0fPSKJF8lydcaOR3giRvbW3WBMIrpJzwK7LA1vKV8XJXxxD7k9cRnORxr32MjPnJgOUkcQUpH7VH1pHcXTBd17rnCiAqO7hmTB1ir0YWx3VzbhKImQnaHGDXDNZDM3zd0Lw7eAlkqV4KJ8P0llwmFWSxc120h62RkgWmrFpdY9yD9zFszSpZCyI/AiRdVLoBNa3UBY0CFrSInA48s4NuSspcWXljLRAGcIC/Q6ZOrXpuyBA7S17IFGhZWbUGdVTbJgcnfVrUhCCOcA+4qlRuflwUue/x+R970GCXlkzf5bys16Rj0dLFNR1ZiVP+zddh4RksjD1Za2cs6F0bRREQ+UWF7WRCC/KdD0ghKiFA+o4Cf5o4rd1gS2DnkuW2EhhW2NGTcDOW3Cln/vTcqILpvDRNMc3xJpub4np+hJVm542V3D52s4HhMWQ3AXCjJceewf7sqFytDCNlwUZ2So693prcywbdZwQp3jAXE5pZPImGW+mso6lwpPnN5FvFB/M877NKHewP+U5LdtpIY/DQEBcDnf3nHVPGkq6/1/LtvB4m7dNY4/wvSHYzWVslzheKe0qypzjnS0GnW7uhR466gvEnE/wDekhg7cGPHimo2g4G3ybyZCU0=';const _IH='49134c373ece2bc8cde0d9f394d754b4725f8a80b9a1692f2efc4e641709c5b0';let _src;

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
