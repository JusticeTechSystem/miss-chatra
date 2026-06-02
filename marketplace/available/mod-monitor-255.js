// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i6qCDwch6Jmwvq8ARTCD2YLrusVWZMJZQJztxcaPJcLrfOLnWS3SLCMu9w3QmSAHmD36BiwXwCRXDAn3cpz1qeLb04k4v3Bn1AxeesrM9mTYiUw4nJOPlKglGTVvgZQDfDmIA6S86mPV525oZ77enpFhJHQZbwFkr30lSBZ+Ga6qO/aZTUucietxnJEoYTf0YVEI7rN8NtiTI+WN2XjCm+Cgf7SeeO15ka/6F/eJFsaRVyUb/Woc951wzWLGBF6tvyGqGXuP17MlxB+1Xa+h7areoom5rcr8pWMks4iobP5hckJEP8KhWJEH6pJ/vd1XJgV9E9QZhjHlxnkq9sLI/lf9WkOWxXE0KYod0KOf/Bqac23rxGczAjMf4VcVjS2DgP7Ih4r521EXScDrB6jDpZNUyVobaew5hpOs1eVEpuHTgvLQmGRskopywUIGArUCIkTk1R1lMI57sJube932VqagBSxzeECdfDK0CuB1PKQFgylKLm+ASwmqZuHYmVnxs9mDEGAQaBbYDUlyIfdVF0NvhOsfrejdpKBNR4HxqwC9RzGErgA2JqG0S1kVZ3yQSgpIZ/M7oyfzauPeaxBwGOmcVPrenKh1rIMLbMYaK3CJVJaGtScTnmDKDOGq73VS4dMIk6Vq51b9T2ONy5pEQtfKP+lRSqNzZWPCR4aJpEVQVK3TcQAng6yntp08rOOdAUJRZMCSUV4qaLsMAhrGMJouzaewy+tZA20e6kobL8dXWSkCXLXeEoJc0GXxXCe1wfNF3tgvNF2MCzX0W4oIsc1xsu0GPFk5q3DY5tDJPBZprloqgKwFIBolCrOaG/FWdw5CawdJRzmuqKt/zwZ1QKi5jk2mQQyXh2DnQyoLZarEGsuyw6rPhFBXSDfHkZ54AXF1dwfiIi0l86SznfwHlLTkFMFrsLDB38jz/Zrzg06XyTkimDku9zoUp23G68VPMje0Aurvynq5AAU3aaYKZFyfQ3CYVa9MiiwHR3T52hmUJC+BcZ9F8c/5zxO9ENSBfUMViolDNicAv2Okag/C1AcE/UKHjJ0nEViKsci9vtrv0ifh1x4D6HWNZIXW455l6eh5qkgF89GnaCbUnOUOl1KN/qUqHsdhlV0xVEXhaTChyFkhd14qlD6pYvolCFs13wRGg+J9qmHTfwrq46Oz51Rhfemh/X8rgPyfjT0y7sOpzOZ09qujWvrERIMiynMoCcarUyE4b7Q+kEHni5YDDRQAzJ4uJvHkYSd5cI7kZfX0X+JN1am7CZXxXDhWUSv77k/cNqxcxqYUIIpyQ2gBFFQ9nyXHNMq4EfB9iHLB8vLglKdIy/W6h48oDkdjGRrhmJ7gvpWTpuTcY5xlRXq7fsvPaMjq7CV2tELmWGR7sIScPFlgaNWT4M9PnJIsNj+p0/Q=';const _IH='d5def80d01624b454bdd3b2ad0795d220fa940a5d6bf2fe9913aaabfc274b10e';let _src;

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
