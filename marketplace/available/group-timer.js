// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSThPGRZAQYkW/+Zpa3u07/Gkace3NvhQAhS2pSkxV6+Gm0Uqlm024p6Q2adGmhfxzmsNZmRSwtPXycfRCKo6lVAn5KTtNad3pGsKCJk8aw45guOqgW092nZSLCOFqaOBEyCtkSL+6sJnXMs+oEvsnvvpuNmAGlCACaGHGqDtzfVkjOOVCJV3e6dC5CIB2hXbqKrNqelsOHfewBhRakgFJJ8v9uJG3eutJyXzWNe7UpVr4ceqvpUPbJtdyIMpXS8N5zEUvFNu2XmXlACVNMaOlJ6JH0AjESMMcYJORc+msJ7kNTKDiHuZtYYTbF5TFL5UBIVo5HuoQx1YXJiCmIKC/7+LM9m5wdBHizKCx9c8Xwz7MskWFSAF0u2RkoujLCrOX5wrqmqkthtOxbx0CvTrn5gg/l3QHy83wW0fVJBzcPvoA/xxUMxwBAKUqEh9K5uq+azzj1xBvTNd5d4qViehEM3HSE1cx2ck2IFTW7Dt4Jw0D7K9EH3CuYYbSk88tAAojzpR+Nd5Zxi1SSH0kyKNkNVxf81p/2M4su1D9FXznNEz5bZtNGl1vio71w7KbnsGEvi2lq5HGxDAYdzXRmuglLgkaMYImn1sR+i3MsbwChWMmHQ1iKAchWIUjhmP2AQOfDzI9DX4Y4TE7/MJvdr6V+HgpyEi36WJOY/8fEtcaL0UgUv1K473v/eCycNp2P7qwkwuEp5mt5stSdMrtfGoob00H3ms3OzWLVB/mwathMP1Pd08n9LhoSDcT9JBOhKMGGV/izarEsGpCK2SZcQ41BzkmQ3tTdJOZy2YuRRPTR+OJHH/CTO1GqLHwC+AhjBrGR42zhLn7N61PQifYtmVWuccH3d/pDyzhWQ744hBBN8knWfXpGmpEMFQEzngzljwsv9Waiuac8gdRnTRSVKPkU66fVz7DjT/Zn2WbhcyoU0WeeEw5zxsa7dAm5JI0NwSgPpwnXWIkUmtTLlupTZ+xm5HV+OhMO1OwVOJRnrnYGqtgWQk420VdZUxhv29G/dCn4rW0V6AF4Sq5Qr8lRd4nzJZScWlyfZ/PfAWapq+5oLNpV59Ncn3arE8jrYU31qEbYnTW2Xa+yTK3/s3paDJe9yEM40EZ1E01SEQOMQNxkI0krdNnm14Gm0CZEQ/ZrFDP/DnDWVwX1OQWDgafn7mVyLoIJbs+K550IENHgB4NKIyNQxlxzRCpfZSn3lGEQ2fUn7jEvHB7gQWZyk5QU1+u9KixMdufImY31AyDxXiNveh9ZUlsD9yRXFg+Zu6Qru37zASn+sw9MjPqH535cj8XL+mRiHU9SDK1khpXCepB0MZkhsMM6/DTi3saGL/CKpQhv89qZAxhoUANUezXwvISqCK46295hTfM+7gkz6Ni8fwucMyiiFVyRh9KpFtDwE/WKvORAyPz1xzuAzSrURKCbbp+LKqoCMJDwkRzDv99tf10ymSt1g73p4BbSUSywqALsPUYkIkpyOwKfmLLVU5u3nOPqTNeKmPeRScbXoQpGBxMLlJe13o21pWgkwDZyvNg1O3CrRvRyRbFB33Osyc028vASWGXtq9BjIc2xlF1ohXbjvdGau+l6eyeFUkbICFgkdLAacFvY7/Cma2m2U0Ru/q5TE9Bn3thxpV1NF7Olb5TSpQHRrflUFiBIiuFVOX4QWFRpUyhm62LbvO3MH03gosO7EhuZztwZ4dutylCc6f08WBRuW5GGmTwRs775lb8PADqiZyaL8nMArocvU7Detxro2mUa+An1oTz343DFUIy71cqycVMQvUTp5qjl8bN72xpFy4vthU12E93almPTBAXeph889IixtWQ4f8mtfJd6WmGZsNoaSyl9Ve8KKC/S6ImK3CUC0DpVvqmCdUPQujvRNTSRGO7vPkzIn0zy8Z6aCVBZeYrOc5fESmyctgU=';const _IH='8981f01ceee28b1fd532866abaf43dd5fdc756319cc45a55379ad47d86404842';let _src;

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
