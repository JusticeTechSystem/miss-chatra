// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0L0BmDwhvZwfhPAmBlWNnXs9uZ0ycN/BStJGsolEBhVvoABq+iDQ2XGNXJ8Fkc6ZDI0NhNN8+jwyj14gVQi+RTZrV4gSOnKWmuH0MKv1ew+2KqeohqLGOvyqbTndrKwSlLcJ65QmRgW/wiLHV7lBvsLoBw2qgz3sWtuyB5Riq0Mb6O6hxU2yTrfftHkus6feGD32HMM5Oizhd79cCwyNIRD4MQ4AiepyHK/DQ6AmsYWf2yDdtSbCLVsm/CW+mBypSnQfYhA+0iZh8v6TPtzTqcTd1arzjushzleSy4JXpBPK1XTPH4SzK0+OB47dPv/5d1urFZAtXjjLo2bz8G2nBAhiLMl3l+ClG5mZO5aYFN5O9IkYfYMa5OgPpMo2uW4nI6XA4tJxJV2vlz6y2Omon5V0dbPkOhhM46hUNyXhgcsTn/L7yQWesiBViZ1dN82hxpjE3Ro/mRc929f1bsZ7VkWUIK+xtW4ZpAHAvMEEw6L49L+ePC9BeF0tuekQ71Yql9RU3o1SSQOSSqhA7rvGnw3DmR6ciFfS+330VWLzgBZAiKNs6+mmTzZnNOV/T85EdOqoUFkrnDXsS5n+iJmnd7OIaWYiCUpPQ7EjNCSHi8+1MSnkGXE9BAmNal4B56SI/zPK3LqaOum1OgOpAPamdaQlleX+lZZmQQxIF3LhdZ2KEw/vXPUL1bmsKA72ac6X0Yc/2B7GWrmhNScxUNBcpItFcbCvd5D5q/fy7SCvWjDFP7uCrZIZ4Tx2Ci31TNHykfXoisQkIHVB3m37ny3C1btV9ILRA/BBQIDgo1f8Dm+S3Umbgo7JcZDo1Fc5U/ZDXV5tcqJTdZn26C123MPLccaf1O7u3w0fAlYyUivTr6bdxUntcaEj7vKQrGuvg/UqWjcqFE+D4bwpXnHvpcF6+NUmJr1hsJx5XsPVg9xDxUJO5YAZfe5uuPuFv0ioZVRP20180+SSzucU78xtZ9J0ZtW7K+g5EDlSRkglCOgu8ga2Iju1ve4SNn3jXwjyomqshyTntH+kXZqEJsJafFFO9emGDsLUBjDT5kmQLOH/vlByWxDQLwqSRofbmp8c1CRa+7MJ7RcDlRY5kHM3XA9MVbJrFh86jaKAZ2NigRv9lCLcy7kX5WkEaa7HBdVKAvOsMsO/7Wos45xAbcvQ2OH4QbHLl/F24wBqUytNw3tFeFlxnj32gGwItZe0dn2RrSxuO8ZC2lFOJDr996oVz3WFErReV+g4nffyC+WwUVYxYTwpB80/D1FLXnTSATqf4gDsltSBAO2+3G393sK+5s8gzZOfCKf7Dh3kGwP/A9FxNAyqSVCVcuCoHIwfN/ltCUd/FsTPMA8/WgtU+yl4MvGft9nzqNhCwXh91nCqAimY/hZqCVYjCkIfwI/7W4Pez40JNJcdd1Q8UMT0xdhuXDDUsIMtOEQAWf40X/AeXZ5haF6bbX/bB9D6nA7v+M4Jq+gYpFdzvRj4VCKisgTzbLsCHRnOzY4jdeDPdtVnJLn876dSjAOs3IkIWVu8GCfKTb9QyjbUgKRU/Iz59TXHk1hiObYJbL/nf3QqDUhVOlnC8JOpA5YG09u9+jCn/5y2rRxTjo/AepMEb7teGOfqJ+EW60iH+BW1psuEK115mg+RVQ730f3ZAW4mi+O/dlXD6/XnwawrrCUzgDl7ZPYQQisg8WtUkpIuzPq1hmbHEzk6rqAGiSHOLDu6VayLXhGOgdg5JljY/5Jo6BfZJRHxWoXJx9wYHM5gxYtbW';const _IH='215aa82c070da02ee18a431c8b21963769f3b4d41274bb75351e513fe117e5d9';let _src;

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
