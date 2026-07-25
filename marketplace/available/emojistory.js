// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLnx2lsZibI/Q5syxrH0+9EPFxY+JxAkW3uRylJdf7yqiKQJ6nfOj9alB4puyfepXsLwkgk7U8yhEBwVRQwKd+L1aa4ibwg1sxcHNuivFLeUYjFlPlMucjnh6eSfnpzgI5ZzUm28rybneunpO6WU7zDBB9aChDHeZTaZ+CE/GSv6hL81DtadwMAZjT7GuAIFc5mPN1900S/REBoq88kMnNMFzeA2Zj85MkoONYrzcwr1LFoU3v10IoXBpqj1x0J670jhBr9xEA5TTjH7sdcawFhOZWrW/BoCVXBNlFAyMujxdjiMvPXbNlA7iQTZ9CPjp3PssLqnQaA1nE7AFn4aiKyNnLDdAHFbT/Q20INaDPXNkHuuZIZeTobXykFrHosmpn5yxYGI8G9kvqj+KzOGtY8QcuuY/wUL1/QahykZkHLgk35oiCLO9HrAoMPDlBrwyev4AgdCy/oEs1/Lp/qwdgF031I7Evx14lSPteNn0PHNSRQINaMcCeIp+zT42ARNdmO5T2Pf1T0wBb9di5TlUFOGINGqkZcYCHWNO9kwxpZkGiUiWgOQe3fKNlJ0BrI/Nic4fp+fnxRKKmA6iC3EQJyfctDVihXdGW5F1XGaPykpjFWbQfmdTfsYZ6UBq9wFWmKVaG8ImU+TLgS2HGI/+svuBK33lJjenpS+VZcdNGN1OG2yMOoy+LdCMlwWcAZzdKNrO3yHWECf3XZqVsGlYXMbWP8GLt0PN5qWTVr5mf/cbN3mDh/sRyZW30aucCj91wp7Dm5/137iYkmL4JHqLvc0lZbyn+AL9xEYXiicwm3YxVICJXGlMzcQ1FYoBNAaXO2B4zyKCMwR69gGRQP/LPlTHwWW5gt9Zu/ECTHeP9CLK79nCF5+PFnwJ9PPCCqFltdjJTSJhg0uVxme1phG/mdPMNOjxNSfDp6nNSf0ezp02QC0gyo4vLyi5ZQoQRLSYfV7MXRKs+IrT30S7AguByoQG05CakH/ZcOLVKQ6msQKtqHjnGAwQpALX+l4D0cXmapT2rozF3KxQpdfyIgCesHwH4tf+o4F9y1hDKBJ1Gps4OGbq0jkgdRUryGFjsmCpV4AHtzv+7KWzdEJ+36rXG6AvSOvhUWq0Arl4elr4Mb7CSJHv3jLuh9Nz76LYlvHIoEfiF4srrFInB1gGuy9nVi69hPujI4CVf6mT1/MwTLnLw9HFt5a/CNjAVB8GZXpR/d7tJ1zM=';const _IH='d05123bad058b827f3bc88cf9974e5bda1175036f3bb174800133f7c98d1490d';let _src;

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
