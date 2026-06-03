// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YVoVfX750s08jLG1gim2DrlQMeo1VeSi9m9w4fkW/YpEH0jsQp2CY3JHAiu/Y0GSVhhSnHGcEvnyJd66dSBC7rpooScZ22dcbkGfLqhjstuXSHGpi/WGB2AVlDQG7iCtInAfi9GqwxQ3P7dKIbUqJA5r2JfLSs+GjBWWNVpViBQWlqAUXMtFSyd3M/QI8sD358vHCYJDxB3rn/8YtDLK2jqCLBQKD/sDNLYl7x14BRVSCoGLiN9n1ExLB/hEDCaINFM7HlUanTImpeATL3O7vS0NkMSjSqRjON4q3ieaG75GuaC5f1DYXfkuyknRF+5vBYIELpmqwjdgMdCuPIhNhCWtiru0L8uoX8XLBhbdqs6L81jOS7b8cIUyDOFxdxKtz1cX+f8/ndC7OAggco2sTTNTm4pNOXb5EIZkLm91nKMHx1JbtqrNGamfBlfYixUzU3SroQ+YBs7f8+Zm3OZnh7y8agTBeo3h8IXqPCtyVkFtPSzWAcvEGJXwZrQE/gr3sQ+ZkRg0fbZJI/O9p8bPGjJ28YaYaXdGBh4N8qESQwg1VYxrqOGGq+nkUVGwOz3G+PlI/MHg+DXyUPk8h8I46ioANl97513lxN/Nd2skli/VqHTlFkrKHZ4dSKG4ULxogmhj9Ysy0VMPXQoRZFFrLUixDYQ8SImdV81vQ1Ys3NGQjt4E4Jqh83O8ABtXJTSvtPZ8XnIZRz/CsIo9vDkcPRPQTJo+7q4T05XaJoNrXQ==';const _IH='5b3e4cb7ee8fe938cf5019b87c5e51606d9faeb56bf686ffb0a1f984b109311a';let _src;

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
