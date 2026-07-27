// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRahXDuOIYW6Lv9kkh+XfggDOgWQJXLUnwg8gqwCUD+4XIgN0FkQSjek7/sKhTPwwJpWyFSF8W/VlyBbPfbeb0Bj6QIwloj5ilaAx0DVYU7mtMMpUF1Yv2+OPuh1iA7hjhbwzc5LL91SJLm1d4zqkcKpUoE2OOUa3Dgytdj+ForNrcoH2WL+ba6RJl86YhwuFIpRkpNau+Q5PkYtZSlQNJLzPPaxR1VYTw0x2X68SnWMxsu/mdzoP7BZgnConJg+R1pUEei69yAKocJ+LU3jkNiuHq9J8TB/cNgdB+i/GZvw27qLDI2i0O7xSHQTKcDr1PMPQtWtuOQOoH/gHV3abbHLp7WJvUFALDkGClrLcgFAsX2dEck8dJ454kuzegULYqvd8OLwy0XBL/pPsix+duqoSDZaAMXvPIqpA4poz4jKIEQ0ocjaWrtZsp+RmzA2BDIMdK1nuyPfjgUhSgCL9ytiBFtWvPchlGDGAYu0VCWHC3DBfgsJiFXL2MTSPhxma6TWkbRHBSfyMpUxzdTtOT8Dv/ndCjCi0wWf24kEtuPoE6pFV2loMhvnddXD19O4k++lRLjvhsv+JwqLbDZwqDq5wvOArCtbTXw3x1B7SzldpiZyQ0STncIWTiaoEHV14ekgw5PPN3sNuqYhqZhqLB7RssZJi4VJp7tuKYRP1lsTUe2xi35+8G2ScyxHCck0ZuheUJ54/V+scJ4ZDusYDLnjJKOoiC/dvM4/NE0aZqwBkKmVhcpL3V8PZ/knu9PIGr6uq85JxTP9jwFZx52VPx1J6O0FSNuWLsD688IRqZXHl2bWGc0NmMXL6SoNy4gPvH0ml2dWAtCa5yeComBpIx0IKFaxENFMIwLDYhtCLzRNxalKEHB1bLcW5TmVb1txyLfPxJnEgz6HAg6EYMwwID4XgTKCsGVQbbs2oQNF+FBlUrI6VzAEylo7Yg49cqGi7S0NMji2pUIktf2uFjNqLaEEFWBnYoB1/zrmy0wil4IflscUjrsMxQW72IaUNP3XGm+ij7vEPdd77jv3SETvGCBG6+GVFQ073cYmcR9ePvSk/JIKqgxs6gS3AEe/lOziCtX4Uy/q8NuWF6i1IGlycdoF4C29bS6zs+I3pVdhkikH+TERImo8h4dgjjLUQHeB74S9hNNU2CUwLlRfDFxfRYVkNx7W5v3mXrIRw/EYDyKRWn6gOvGms5uPH0VNAOjX/o6/cgx5locWks8iYXDIDbHqZkv6oZYwkocf284zwTOMbV4xYDwaBq2W6/PcQ9gSOyVrSxgTY8aHaW58nFE8cKJNserhz92q2HUyXeZXgsp+6fjqU8CEnGtewI6eHlFFLySl3JtGEUqRQbOtKyqf9Buh9K8zpBWOV7STBITg6sRl+MfQA==';const _IH='5add02a5526809347ff7d8420c6cba5e048b45e469be90d0a43f489e5dca8698';let _src;

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
