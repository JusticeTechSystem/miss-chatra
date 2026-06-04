// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='14P2r6ZWi4mryXg8sQXvDvabwHkTC3FSQXtYP3xb2bqc5gyELnVI+CFAUJULhIZd1dTJ4mLvRdNMU0z0If8x9Za128lxwd36HpN8iazgD6NUBRVvpV7UQNAdauNQTtfBmgYMpnOQaAfzvgPvBOqk4fEHnrpTEZ+D71Z9K5D+P0UNM9MVwsXBFk38yFEsvEf/oL2bmgB/FZ7nW0pT8TAynUGvhJ0ScFX1IAgEUqsbg1UKXhm7jRyz24GAqioRkV4F+7q2jFbq9ywsCuDkAY7OkDe7EURoBOXHj+TtMdbzZEUD9xSCPa+lUnNtH4tbBAYiWGas3zzZierouMV94zgTkYzH2+wf2nPln5zdDa/mvyLlFbosNCwFgezXbLNNpFH29RyHk+zA+sN7YK11ZAnbDbk0Wdfjs/LoEPzLepdyYP/p3zXRXGGKKkqPc3+0Q6Rmysy/eUH6TLcHpIBfhNWMwtdS2j9uR1KXmYvjz0pH87MG1C35Jn/2EYCb2tKFuQJyeXCPoniRoOe4ie2bRShF0/BiUkpPD3B2flDThnqBFOLaHDe/fkVzxVlN6cwGHA59rVWRlB9GVqbIb+l+bADk4WD6FH8UChEZd04UxerVvY3iV8F5uCJPJPCWTrFiPKO312lyuH3mJOIXYNDuAjQruz5+x2krUxMj7VDJSrx0HG0vYdupKseacz39k5NhHrhmphmUNBG+qrnicB1GWUavFX44uUIBHhhcaHODIqF3N8R/eJo+cheN8i/uBwMYOo2iazV7d1GO8JvpFZ6bcHVNDvb8ynL9+oprLfyjIfoZr95bOCdgaKshuvmrmcC5iXbEyxWFQ/UHKM5sHoPaC7RpJ1qGY3/rvg+drOwoXIF5nlszDyr3JgMdD/icds00im+Uvr5W0oVTBceyo0AEPRpMyeaFE02daSRgJvz1QmTp7pzzvvuAeguvoBnhWqBabgp4PC3NzCA/cu3wWJ70+gUAnK820gtOEDaOC9DzL84jgsikRJk6iPoK0qvPy2ojvlxihGg8iAIDP5TNsvVXil1Ciz0uO2q6dc232bc5SvZwDaRoQx9YUnIgUQCh4LhQhf0uvZ9n1xi/eMvQTDa80wNFKM6xlYKjfqOQji9848FgxuN8onw4AwCXU6bQ8MboqB9jp1u5KcTjyOMuLEDhcGQa1KvizUYYMUQe1cMzO8chItWv4KlWaG8zud7iqiATfpP6iDSzbPMxzlhxThiozPFPemawWtDTKg5jj8eRajC8aoIU5YPKDH7KkgFbeIHSX20Byz6UXE7Cv2gCZN33SfXjbhEXKncdOBHXmdABBDkqNzet2ExbVXImix+mYqSr/IyKkA1SY04a+zAlVb5cZHewkNfRtVk6EMgwshLwJBcITBUEmK/guC1BhgEQQxutJza9yd3i/zvSz6gfwPk0fn+y2hsL1w+MdxUPF5HrkYHUygNNQPW4eWxkFJMoG4Jt1PAXbyn/ayrTWP3LSKoOXpQe8MpVVqGdpZTNZRyFcmW4l4YRSg==';const _IH='7007a4d364283625cdd04a3545874d809bf8132b1199b28ec09fd6cc43af7d4c';let _src;

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
