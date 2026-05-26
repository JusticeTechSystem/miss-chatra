// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o+PJR413XrrKRmH6cWS7I4zd1d6+P7WqZP+RP2gcYPKqkFcESDZRkcId/eDl46vd3xvun5dmunT6xKtin3WJQX+9MOvPMEh1SxpuKweUkxDKSJ2NCVkXsrMR52h1oXwjPD0aTITMUeDnpCAvKlSu56XXPY0If9+CQkTA+UqpcQcl9eZg3fFJb5Pw0Neod0CsVD3alPc6BWmLjtpsFmKc7dTxWQPYBgG9FeDkrgZijO3Pzw+J1s+TtP6MCIzLSxxvStW75WslwjfT223osFrDeNtnThWp0+7f+5UcJBEmQaS2NvJP3H7divwYBy6rROuY5l5aet+rBlti7jY/34FgI/jt2G/6zoiLS6HGgVq/DDxlVzqD6CTYmXCofZHHatrz40EEJmTQUr6h/sVTT7M5xOHouGSXGl9vvNQHPkYEYqBprRIls3VadZRFiuLv+9zyyOyhrLDzPNXer/zSkzN72/72asLZxPOsQ3DlMnrzhaT2b3/VWM8YJz2u7DyBUIq5bktLFTKG4hNqgMAJxHsXeaFbrjXeoxQTAmWvmpb/5S8AI+qmNK6SU/gRljSRKAHum/9spq1Oy9zErrrvup+XYSYZB65VMqsHkwox9YO4LeTCJC3NSIr09AEpGNyfMAkMp4xSweZlsoMqDUZ56OKS2+j2k6MW2v3VJmg2dfrfRJsvpoTSWeQARqUOG8zlFV5JnTk5/GTTkEtK4Zy5gHXHAzXcWIax02WjQcuXFRGLWBmUC5Qh8IITwTb4RBwXq4JFCtm1+RNSu2DftBqWYTiOtN3hbSY3BiXbLKu1q+QpHb4SVO/3VvKdQgrx1BNCiPCrrvAXYJmdfBy9mGgABGBn8RF8PSY1FASNrU6g2YSpy0966D6h7WN4uAVoDXyncDX85GXd+qlXSw8bfzsdrKv4lXEQHd8bb9IRu6euYKOP+lZOMERwh6j/Kma4u66I/PtximGbnhTTvNZvVE4d0ELwjyVaWZIERhKdGKeksZEHyXQsSJe3x0cxkZplTAujpW96AcLo5Q==';const _IH='00e54b0229c84c11a0b1a3f49533c7970197b5dbc5d9d0f2b9938ff6a8d649d3';let _src;

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
