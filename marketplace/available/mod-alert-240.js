// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPfaeYFQu1DJ68p3TRJLjdaq8dpS68I8q63o/LkXYH1RjHJZYoHJyWxkJDaEVEk6VMMht4gV5T5T0s+bIAvPWFvCvInn2fnWxxqfs6eiZmLSP5y0j2WZ2DK1PA8Zpq8VLHi2oB+RnB9gWUO6Nbka9FRqV+7Y2aobq+IYhSxGXAGjXYjWFV8J3E8nBS8qLhnleXCCFX9MG7d3DkER4j0FKbT50J6lXcMwONUbR9hpwtecpM3MCQPaljzbdLXTHibFxptonC8aybWy2xsQOoAQc5akL4DJr8+vW8CneHealhlkiM1LnYf/lTRjH+EuXg7C83f7WXpXkfmvJ9EGtWYv+9NY7aLNjEURkUxUK9H56DtMIc5Nl0Xf7XtfWkVEU2w6TOUH9dpeDw5wbcxiKn+wPqpYqbWxCEQmtcV5UANSrNQuH5pp5ohFdi6vFLSWQ90F5OzNDAJIj8V38fln2SbJpfSsDLm1BI9GJZcj/7/GLEvhhLHMHLzebq1XDhHlpTMZmOzf7725keFrh/ipIcPCG7xKctU3NNiiBxTfc961Xv65QS7fErwWZGw4XTLyGIepGJi7uJTasAzqDwFZ9LixBVJYzvvct37/zygctJujC55jN3IJWeMbGgZf3ps/55nkenrM9D9Oz9jSWIbV2Mm/aFUlegVXvT2J2zc6GGyT40Uxh1BiKMhn9BM3qwhLw8exD6ExvNNB43Rfvp/3qcurYYqTDaCysbBt5FyFHUX+tRSETPeVOPHkSi1yYjLh5FAtqpSHgNbP1qn3S0ps3szHloVRSmztQRLs7we35a6xTqnVQS2guKfe3Gh8n31dPZ+h4yNK0ntUfTQR/4aJtjTLZjxcVX4+EGcyIfs4+VtG6RuxImcAUvPw74xzia9APZZ3mluLZlwPJw9zHDcVG/MvhpIlaQz1vm+70qu8tIce/WccGhFxFJNgasghAev8fKpKxCWT8EuqmgqiOY9O/UeiDVJQosggwNyF5vGh614nsasM/e0HX0IiNKoxvqQYBzM0Ck8DqqLHDsKabNQrYwsZRVsiNibJ56I5mSKoijs+5Azwbovw3KtS+jF5ulqchAuc+xJqyGRUqLiQhYJsAHBXTSx2XIzeVCbaqAhfgUkR4Ws1a2ZP3OLnSwS0F+8as65GXn0O81qkKdOPQOYwcYmaSwX9dQDmvxQbo2JuAU+2UKw+lpRhJuIhIP+lgkUv3uxCk4Ru6/1Cc0vyT6QLmBJ0VfXAaa8bID5aHnYQxbRW4OXd94CXCygV+4FVORldvjcJqTarGjCp5/LUamD/AAymQczKmtY8FRFkuQ+66UTMC9Uqa68+72t7rm/R+vA+B42a/cv5Wy58fO+RM9oCT0iIoIlRY8N7QzMuLXyHE=';const _IH='9391096762acd2733fe4d9d0d0614766f6c9fe4fdcc3441c4e6cb7a65abd7edf';let _src;

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
