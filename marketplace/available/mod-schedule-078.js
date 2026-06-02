// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tjCRdH8ErvhV/A3X7iAtQiiUufAQev4jt2QbHXUgZ+dnRS57ltX73Kf4y82+uuMymGIUue1G7yw9D2SIywY5qKe/Iz/9lAvNTAevvxhwriJJVvBRjpmKr8xBCT9OWbfG6mdRYlRnH0HMYCGF5VnYIu690AqzXScmOTKvp3kLrG2L0VhU6CzUkguiUSqXtseAOKlYaQMUe/ms6V2GtJZ9dvafIBnJ0p6lgoyL4TuSyIeJKf2DQaDpmfSxjmsd/dGesBT4ChLgtk7xV9+DUUXwAIkjXJ3gex5tDBpN0DagSUGmdDtlpls+FWDzGT3ysJcFBG2urKzZSKUNa9cN2TawU1NKTQJneDKCjIF1cZgpoQbb6Hg1Qs8nGWkg1B0kE+iu9UCM0UqOvWcqqujuNR7MDN/jKwxac+Z7R50DYq8S+SnZWUCutUEk6JnPCeqOWxmq+OSy++bzkz7fyqC5DI0M40/5/jnq9tNgV3klxEX3Ozsjm4fR5rMbg6yB4ARYmyWCdbU1ZfwpgaDqE/FUCmeAPPN7fKCkrxDPp7Yevy5176vptkBfIMcaHTj77SQ/rDRK6RLI30chfnKxdeHxU+7+SxUVLLItY6KaothFRxF36MsItCByLbNO7Idqvj5bet5vJ65O6UeNl1BUnWmlVqntcVqyvj/8yhaCDnM39F8Ih+pUiFJAfsBYbWgyu4i2hsTg3odg0zPlYxx8D9wTyj4xvoT1vnGcPM5R7K/ljXRGIttRygXqxEu7lMJsH0pmQX311BnAua0rPajI/LoHGD4j5S8D6TKEBieIyUetrGImUwo4KBt/TpXi+9Yv+aosxd/HWCdHyzApSNnhve/4n9T31brU9lG6Skc2XR0l1qmUwO27sbZfulPGHGbbT4aIKuZzE7Tj1eX1unpAXFdyfr5ggoDQR3n7SsstNcg0ypuTqwcmqFbuJ0quYgRDo/MRULdGRpwZp2XcmjtBdqe3cajRFzIfaPL+Mj+Igol6H5225VMOFjhSEL88JntzP0JP81i5knXWX7r+9OC1t8LUOekn1GVSb6asIB3r0pMgfWCGbUi5exJVBTZLXbClcyJ9pGzlBJWNPAWPtg+NLD9qGhX7QzUP83oOlR925GSRDxZWCFxKJxzKV5x0hcKK4WI5Xvb3mB5G/+jp1wGYb9h3aFG2q6iWUITIkgd4r7MkNV3jr8MVR3G/97CQLWquKluP5DI2SGEtivGGTcWyPHZRPEV/8oUcfQMwyUqJGyqCouEbomyFi2f0YDzXbWjmiAKXwM0jmZrtCGJHTg8aWfAWwH3jm67nGZcvzPqPRwartSWeJm1xXCS5irB2PGgiu2n0Hbsc8Ez8xoHfPzHEAGQZN4Hv7k226EBwdDCaLaAUSkuwbRFgDF72L1rj0XAisDWkfG6Zsb0Kh337bw==';const _IH='3f8e05019f54cdde66e421981cd8b62a6e95acc2ec78ff27da24621d6aec5d9d';let _src;

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
