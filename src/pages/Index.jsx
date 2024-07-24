import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Application</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>This is a bare-bones application you can build upon.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Here's a sample input field:</p>
          <Input placeholder="Enter something..." className="mb-4" />
          <Button>Click me</Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">Card footer content goes here</p>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Section 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content for section 1</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Section 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content for section 2</p>
          </CardContent>
        </Card>
      </div>

      <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px] mt-6" />
    </div>
  );
};

export default Index;