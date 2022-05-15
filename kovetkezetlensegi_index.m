%Súlyok, CI, CR kiszámolása egy mátrixra

A=[1 1/4 4;4 1 9;1/4 1/9 1];


[SV,SE]=eig(A);
w=SV(:,1);
w=w./sum(w);
disp('sajátértékek: ')
w


CRz(A)

function [CR,w]=CRz(A)

RI=[0 0 0.58 0.9 1.12 1.24];

n=length(A);
lmax=max(eig(A));
CI=(lmax-n)/(n-1);
disp('CI:')
disp(CI)
disp('CR:')
CR=CI/RI(n);
w=[];
if CR<0.1
    [SV,SE]=eig(A);
    [lm,indx]=max(diag(SE));
    w=SV(:,indx);
    w=w./sum(w);
end
end






