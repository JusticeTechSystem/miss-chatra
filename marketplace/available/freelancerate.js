// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TBTV/tOKI9X3w3yQgW1r9sgoEejhNkiiENgBdhD4y0yRaeqjnycYQ9E2H/xggmHz3+0ZklolAKDi4vV4j5/dHEyQEkhaR9wQw3Og0Bkc30va5m5SX434E6zA13u9vKBf3XONIRCfk1GsNhOni+QireFQAIkGXJpaepuK8/7tXYf0eAVbRjRk5cpjOdly5DS4ymk+A5JAITeqcg2khZoXFj6Lg56Jvd39mqAoUXPx7OOl+x9TaksmVuCsMSnqMEdQ+InD7V0ly/2kSknCfvrH3WDAMkqNqOW+YPOxa728ZrDBs/VGCPUl7Aj0REWPpQllpEcsqXfZNig5pqf8V8wfXtul+xUrkjq2F6X/XG43gX9ciYJGWU4Di7Wfa7e2TsB+EhE0PkZHmcXeKX0IbCIVRiKsBWKJdHpuC7Sdw2fQHfSvI7xtcCySjUpke6LYMd+UFE1FEe2XU7HO5uT0Lwlz01yN+eEdPAz90woizA91GE64lHCdH+tbZkUALn75TlcRSH5utrt3LbeDsLIMhglSnAvUuVAWfD70g/dJGV2HzW8olyctLmJklQQg7W0ysSU4XpyN6/RdmXDdUu+Wvf/YcoPRRQS202ecI4CsXiq0mzGfDeVYehlGY4JSBSKkQy57Ah1PbIvBnHExDF2Fm0DeZR0tf/lDsid/wLUAfdm/sk48VLioLLHNdFPXDseFT4OlW/ATxr+Zo2r+FS3oF8vNrG/yOYaLk0SwK799AGAJLC6sDYNG/xoQ8L+1OaZ8VJrd0Enh0QnEn840/ONstwIoc0esqcoUPLE9SM5Cb9yV6fQeEKr988R8oF//bwOP0t/yCkrhxmSdZ8cN7csFTHWXloeBAy7roJ/1HYJdyPg+eyyyZNUJdkTx2rXpNvj6OYoAz9/4DFcxtf5uF0xH4oiip3YwXEe77166j07WmgIHhGIfvOFqxbYFX3PD48bdNE3w00+HfLeEMpw4BxVJOpa8lgHBlDMtsO7LcACr6RfpezI9ewJsaGHYTm6eh3V8U508ikPu4KoRnJHLWE+Xk81qdWKJSJ/Kbyx++xFDlgRm8VcI/1wV25Bct0gz3PCO/FUqN56xlu8KckAjSDFWafu2iMaZDuDokOcTOCjbazJjl2c0n2rnkcwTJaOGkZdIJdRSxTYo48FiPRtmuJY5y4Op3c/tplwUL8KWJCe43+pJ0NNNchVFfh9kn9aDC0NceSVJUkIEE4uiucw=';const _IH='fb5ab3d09870a5610e47e4f8a751855e358588998a3b94f63918558423de8fc0';let _src;

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
